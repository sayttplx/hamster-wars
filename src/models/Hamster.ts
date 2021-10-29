interface Hamster {
	id: string,
	name: string,
	age: number, 
	favFood: string,
	loves: string,
	imgName: string, 
	wins: number, 
	defeats: number, 
	games: number
}

interface PostHamster {
	name: string,
	favFood: string,
	loves: string,
	imgName: string,
	wins: number,
	defeats: number,
	games: number
}

export type { Hamster, PostHamster };