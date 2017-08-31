'use strict'
angular.module('users')
.service('userService', UserService)
function ($q){
	var users =[
	{
		name: 'Paco de Lucia',
		instrument: 'Spanish Guitar',
		content: 'Francisco Gustavo Sánchez Gómez (21 December 1947 – 26 February 2014), known as Paco de Lucía [ˈpä.ko̞ ð̞e̞ lu.ˈθi.ä], was a Spanish virtuoso flamenco guitarist, composer and producer. A leading proponent of the new flamenco style, he helped legitimize flamenco among the establishment in Spain, and was one of the first flamenco guitarists to cross over successfully into other genres of music such as classical and jazz. Richard Chapman and Eric Clapton, authors of Guitar: Music, History, Players, describe de Lucía as a "titanic figure in the world of flamenco guitar",[1] and Dennis Koster, author of Guitar Atlas, Flamenco, has referred to de Lucía as "one of history´s greatest guitarists".'
	},
	{
		name: 'Camaron de la Isla',
		instrument: 'Cantaor',
		content: 'José Monge Cruz (5 December 1950 – 2 July 1992), better known by his stage name Camarón de la Isla (Spanish: Shrimp of the Island), was a Spanish flamenco singer. Considered one of the all-time greatest flamenco singers, he was noted for his collaborations with Paco de Lucia and Tomatito, and the three of them were of major importance to the revival of flamenco in the second half of the 20th century.'
	},
	{
		name: 'Tomatito',
		instrument: 'Spanish Guitar',
		content: 'Francisco Gustavo Sánchez Gómez (21 December 1947 – 26 February 2014), known as Paco de Lucía [ˈpä.ko̞ ð̞e̞ lu.ˈθi.ä], was a Spanish virtuoso flamenco guitarist, composer and producer. A leading proponent of the new flamenco style, he helped legitimize flamenco among the establishment in Spain, and was one of the first flamenco guitarists to cross over successfully into other genres of music such as classical and jazz. Richard Chapman and Eric Clapton, authors of Guitar: Music, History, Players, describe de Lucía as a "titanic figure in the world of flamenco guitar",[1] and Dennis Koster, author of Guitar Atlas, Flamenco, has referred to de Lucía as "one of history´s greatest guitarists".'
	},
	{
		name: 'Carles Benavent',
		instrument: 'Bass',http-server
		content: 'Francisco Gustavo Sánchez Gómez (21 December 1947 – 26 February 2014), known as Paco de Lucía [ˈpä.ko̞ ð̞e̞ lu.ˈθi.ä], was a Spanish virtuoso flamenco guitarist, composer and producer. A leading proponent of the new flamenco style, he helped legitimize flamenco among the establishment in Spain, and was one of the first flamenco guitarists to cross over successfully into other genres of music such as classical and jazz. Richard Chapman and Eric Clapton, authors of Guitar: Music, History, Players, describe de Lucía as a "titanic figure in the world of flamenco guitar",[1] and Dennis Koster, author of Guitar Atlas, Flamenco, has referred to de Lucía as "one of history´s greatest guitarists".'
	},
	{
		name: 'Jorge Pardo',
		instrument: 'Spanish Guitar',
		content: 'Francisco Gustavo Sánchez Gómez (21 December 1947 – 26 February 2014), known as Paco de Lucía [ˈpä.ko̞ ð̞e̞ lu.ˈθi.ä], was a Spanish virtuoso flamenco guitarist, composer and producer. A leading proponent of the new flamenco style, he helped legitimize flamenco among the establishment in Spain, and was one of the first flamenco guitarists to cross over successfully into other genres of music such as classical and jazz. Richard Chapman and Eric Clapton, authors of Guitar: Music, History, Players, describe de Lucía as a "titanic figure in the world of flamenco guitar",[1] and Dennis Koster, author of Guitar Atlas, Flamenco, has referred to de Lucía as "one of history´s greatest guitarists".'
	},]
}