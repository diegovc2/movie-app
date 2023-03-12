export interface Movie {
    readonly id: number;
    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly genres: string[];
    readonly rate: string;
    readonly length: string;
    readonly img: string;

}

export interface Movies {
    readonly movies: Movie[];
}
