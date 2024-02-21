import React from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import PokemonCard from '../../components/PokemonCard';
import LinearGradient from 'react-native-linear-gradient';
import { useRefreshByUser, useRefreshOnFocus } from '../../store/hooks';
import { useInfiniteQuery } from '@tanstack/react-query'
import { getPokemonDataFromAPI } from '../../services/pokemon';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { ErrorMessage } from '../../components/ErrorMessage';

export interface IPokemonsListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const PokemonsListScreen: React.FunctionComponent<Props> = () => {

  const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      refetch, 
      isPending
    } = useInfiniteQuery({
      queryKey: ['pokemons'],
      queryFn: async ({ pageParam }) => getPokemonDataFromAPI(10, pageParam),
      initialPageParam: 0,
      getPreviousPageParam: (firstPage) => firstPage.offset - 10 ?? undefined,
      getNextPageParam: (lastPage) => lastPage.offset + 10 ?? undefined,
  });

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)
  useRefreshOnFocus(refetch)

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isPending) return <LoadingIndicator />

  if (error) return <ErrorMessage message={error.message}></ErrorMessage>

  return (
    <View style={[base.card]}>
      <LinearGradient
        key={'Card'}
        colors={['#fff', '#fdf1f1', '#fcf8f1']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1}}
      >   
        <FlatList
          data={data?.pages.map(page => page.response).flat()}
          renderItem={({item}) => <PokemonCard key={item.id} pokemon={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom:100}}
          onEndReachedThreshold={0.5}
          //onEndReached={(): void => { appendData(); }}
          onEndReached={loadMore}
          refreshControl={
            <RefreshControl
              refreshing={isRefetchingByUser}
              onRefresh={refetchByUser}
            />
          }
        />
      </LinearGradient>
    </View>
  );
};
export default PokemonsListScreen;