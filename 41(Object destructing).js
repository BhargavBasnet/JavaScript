// Object Destructing

const band = {
    bandName : "led xepplin",
    famousSong : "Stairway to heaven",
    year : 1968,
    anotherFamousSong : "kashmir"
}
//  const bandName = band.bandName
//  const famousSong = band.famousSong
//  console.log(bandName,famousSong)

//let {bandName,famousSong}=band; //yesle chai band vanney object lai destruc gardiyo
                                // aba chai bandName ko value haru tala aayera store vayo ani accessible vayo
let {bandName:var1,famousSong:var2}=band;  // yo var1 vanney ma chai aba led xepplin gayera store hunxa
                                            // ani print garney bela vanney yo need to print var1 instead of bandName
let {bandName,famousSong, ...restprops}=band;

//console.log(bandName)
console.log(var1)
console.log(var2)
console.log(restprops)



 