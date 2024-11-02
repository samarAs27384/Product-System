
var ProductName = document.getElementById('ProductName');
var ProductPrice = document.getElementById('ProductPrice');
var ProductCategory = document.getElementById('ProductCategory');
var ProductDescrebtion = document.getElementById('ProductDescrebtion');
var mainBtn = document.getElementById('mainBtn');
var productContiner = [];
var mainIndex ;

//<<<<<<<<<<    localStorage    >>>>>>>>>

if(localStorage.getItem('products') !=null){
    productContiner = JSON.parse(localStorage.getItem('products'));
    displayProduct();
}else{
    productContiner = [];
}


//<<<<<<<<<<<<<<<<<<   ADD      >>>>>>>>>>>>>>>>>>>>>>>>

function addProduct(){

      if (validateProductName() == true && validateProductCategory() == true  &&  validateProductPrice() == true){

     if( mainBtn.innerHTML == 'Update'){
        mainBtn.innerHTML = 'Add Product';
        var product = {
            name:ProductName.value,
            price:ProductPrice.value,
            Category:ProductCategory.value,
            Descrebtion:ProductDescrebtion.value 
    
        }
        productContiner.splice(mainIndex,1,product);


     }else{
        var product = {
            name:ProductName.value,
            price:ProductPrice.value,
            Category:ProductCategory.value,
            Descrebtion:ProductDescrebtion.value 
    
        }
        productContiner.push( product);

     }
       
        localStorage.setItem('products', JSON.stringify(productContiner))
        clearForm()
        displayProduct()
        // console.log(product);
  
      }
        
      
      
}



//<<<<<<<<<<<<<<<   CLEAR     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



function clearForm(){
    ProductName.value =''
    ProductPrice.value = ""
    ProductCategory.value = ""
    ProductDescrebtion.value = ""
}



//<<<<<<<<<<<<<<<<<  DISPLAY    >>>>>>>>>>>>>>>>>>>>

function displayProduct(){

    var cartoona = ``;
    for( var i=0 ; i<productContiner.length ; i++){

        cartoona += ` <tr>
                <td>${[i+1]}</td>
                <td>${productContiner[i].name}</td>
                <td>${productContiner[i].price}</td></td>
                <td>${productContiner[i].Category}</td>
                <td>${productContiner[i].Descrebtion}</td>
                <td>
                    <button  class="btn btn-warning" onclick="getProductData(${i})">Update</button>
                </td>
                <td>
                    <button  onclick="deletProduct(${i})" class=" btn btn-danger">Delet</button>
                </td>
            </tr>
        `
    }


     document.getElementById('tableBode').innerHTML = cartoona ;


}


//<<<<<<<<<<<<  DELET     >>>>>>>>>>>>>>>>>>>>>>>>>>...


function deletProduct(deletIndex){

    productContiner.splice(deletIndex ,1);
    localStorage.setItem('products', JSON.stringify(productContiner))
    displayProduct()
}


//<<<<<<<<<<<<<<<<  UPDATE         >>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getProductData(index){
    console.log(index);
    ProductName.value =  productContiner[index].name;
    ProductPrice.value =  productContiner[index].price;
    ProductCategory.value =  productContiner[index].Category;
    ProductDescrebtion.value =  productContiner[index].Descrebtion;
    mainBtn.innerHTML = 'Update';
    mainIndex = index ;
    scroll({
        top:0 ,
        behavior:"smooth",

    }

    )

}



function updateProduct(updateIndex){
    productContiner.splice(updateIndex ,1 ,index );
    localStorage.setItem('products', JSON.stringify(productContiner))
    displayProduct()

}


//<<<<<<<<<<<<<<<<   SEARCH        >>>>>>>>>>>>>>>>>>>>>>>>>>




function searchProduct(term){

    var cartoona =``;
    
    for( var i=0 ; i< productContiner.length ; i++){

        if(productContiner[i].name.toLowerCase().includes(term.toLowerCase()) == true)
            {
                productContiner[i].newName = productContiner[i].name.replace(term ,`<spn class="text-danger fw-bold "  >${term}</spn>`)

                cartoona += ` <tr>
                <td>${[i]}</td>
                <td>${productContiner[i].newName}</td>
                <td>${productContiner[i].price}</td></td>
                <td>${productContiner[i].Category}</td>
                <td>${productContiner[i].Descrebtion}</td>
                <td>
                    <button  class="btn btn-warning">Updet</button>
                </td>
                <td>
                    <button  onclick="deletProduct(${i})" class=" btn btn-danger">Delet</button>
                </td>
            </tr>
        `
        }

    }
    document.getElementById('tableBode').innerHTML = cartoona ;

    
}


//<<<<<<<<<<<<<<<<        >>>>>>>>>>>>>>>>>>>>>>>


function validateProductName(){
    var regex = /^[A-Z][a-z]{3,8}$/;

    if (regex.test( ProductName.value ) == true)
        {
            document.getElementById("name-validation").classList.replace("d-block", "d-none");
          return true

    }else{
        document.getElementById("name-validation").classList.replace("d-none","d-block")
        return false
    }
}



//<<<<<<<<<<<<<<        >>>>>>>>>>>>>>>>

function  validateProductPrice(){

    var regex = /^([1-9][0-9][0-9][0-9]|10000)$/;

    if (regex.test( ProductPrice.value) == true)
        {
            document.getElementById("Price-validation").classList.replace("d-block", "d-none");
          return true

    }else{
        document.getElementById("Price-validation").classList.replace("d-none","d-block")
        return false
    }

}






              


//<<<<<<<<<<<    >>>>>>>>>>>>>>>>.
function  validateProductCategory(){

    var regex = /^(Mobile|TV|Laptop)$/

    if(regex.test( ProductCategory.value) == true)
        {
            document.getElementById("Category-validation").classList.replace("d-block", "d-none");
          return true

    }else{
        document.getElementById("Category-validation").classList.replace("d-none","d-block")
        return false
    }

}




