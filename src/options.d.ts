export interface Link {
	id: string,
	url?: string|null,
	title: string,
	subtitle?: string,
}
export type Links = Link[]
export interface Options {
	links: Links
}