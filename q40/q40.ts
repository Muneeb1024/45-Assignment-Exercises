// Q:40 

// make a function.
function make_album(artistName:string,albumTitle:string, tracks?:number){
type Album = {album:string; title:string; tracks?:number}
let album:Album = {
    album:artistName,
    title:albumTitle,
};
if(tracks !== undefined){
    album.tracks = tracks
}
return album;
}

// call function with console.log
console.log(make_album("Muneeb","Album Title 1"));
console.log(make_album("Hasan","Album Title 2"));
console.log(make_album("Lodhi","Album Title 3",30));
console.log(make_album("Bahadur","Album Title 4",20));























// //define the function
// function make_album(artistName:string, albumTitle:string, tracks?:number){
//     let album: {artist:string,title:string, tracks?:number} = {
//         artist:artistName,
//         title:albumTitle,
//     };
//     if (tracks !== undefined){
//         album.tracks = tracks;
//     }
// return album;
// }
// //calling three functions and 3 varibales with different values
// let album1 = make_album("Muneeb","Album title 1");
// let album2 = make_album("Hasan","Album title 2");
// let album3 = make_album("Osama","Album title 3",7);

// //print values of our object creating my function
// console.log(album1);
// console.log(album2);
// console.log(album3);