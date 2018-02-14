
// create function for 2D detection collisions
function collisions(x,y,r,b,x2,y2,r2,b2){
	return !( r <= x2 || x > r2 || b <= y2 || y > b2 );
}
function boxCollisions(poze, size, poze2, size2){
	return collisions(poze[0], poze[1],
                    poze[0] + size[0], poze[1] + size[1],
                    poze2[0], poze2[1],
                    poze2[0] + size2[0], poze2[1] + size2[1]);
}
export {collisions, boxCollisions};