

const formCrearQR = document.getElementById("formCrearQR")
const alertDanget = document.getElementById("alertDanget")

formCrearQR.addEventListener("submit", e  =>{
    e.preventDefault()

    let texto = e.target[0].value
    let linkImagen = e.target[1].value
    let centerImageSizeRatio = e.target[2].value
    let margen = e.target[3].value
    let TamañoImagen = e.target[4].value
    let ColorFrente = e.target[5].value
    let ColorAtras = e.target[6].value

    let newCOlorFront = ColorFrente.substring(1)
    let newColorBack = ColorAtras.substring(1)
    
    if(!texto){
        alertDanget.classList.remove("displayNone")
        setTimeout(() => {
            alertDanget.classList.add("displayNone")
        }, 5000);
    }else{
        fetchQR(texto,linkImagen,TamañoImagen,newCOlorFront,newColorBack,margen,centerImageSizeRatio)
    }

})

const fetchQR = async (texto,linkImagen,TamañoImagen,ColorFrente,ColorAtras,margen, centerImageSizeRatio) =>{

const imagenPutURl = document.getElementById("imagenPutURl")

    let urlecoded = encodeURIComponent(linkImagen);
    let textoEncoded = encodeURIComponent(texto);


    console.log(margen)

    imagenPutURl.src = `https://quickchart.io/qr?text=${textoEncoded}&light=${ColorFrente}&dark=${ColorAtras}&margin=${margen}&size=${TamañoImagen}&format=png&centerImageUrl=${urlecoded}&centerImageSizeRatio=${centerImageSizeRatio}`

}