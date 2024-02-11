const POKEMON_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/{id}'

export interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    location_area_encounters: string;
    types: IPokemonType[];
}

export interface IPokemonType {
    slot: number;
    type: INamedApiResource<IType>;
}

export interface INamedApiResource<T> {
    name: string;
    url: string;
}

export interface IType {
    id: number;
    name: string;
}

/**
 * Fetches a random pokemon from the API.
 * @returns {Promise<IPokemon>} A promise that resolves to a random pokemon.
 */
export async function getPokemonAsync(id: number){
    try {
        const res = await fetch(POKEMON_ENDPOINT.replace('{id}', id.toString()));
        if (!res.ok) throw new Error('Error fetching pokemon data');
        const data = await res.json();
        return data as IPokemon;
    } catch (err) {
        console.error(err);
    }
}

export function getPokemon(id: number) : IPokemon | undefined {
    try {
        console.log('pokemon', id)
        fetch(POKEMON_ENDPOINT.replace('{id}', id.toString())).then(res => {
            if (!res.ok) throw new Error('Error fetching pokemon data')
            res.json().then(data => {
                return data as IPokemon
            })
        })
    } catch (err) {
        console.error(err);
        return undefined
    }
}