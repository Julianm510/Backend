

class ProductManager {
    static ultId = 0;
    constructor(){
        this.products = [];
    }



    addProduct(title, description, price, img, code, stock){

        if(!title || !description|| !price|| !img || !code || !stock){
            console.log("Los campos son obligatorios, completalos");
            return;
        }

        if(this.products.some(item => item.code === code)) {
            console.log("Debe tener un unico codigo");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
    
        }

        this.products.push(newProduct);
    
    }

    getProducts(){
        return this.products;
    }


    getProductById(id){
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Producto no encontrado");
        } else {
            console.log("Producto encontrado", product);

        }
    }

   

 
   
}



const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("Productos de prueba", "esto es un producto de prueba", 300, "sin imagen", "abc123", 30);
console.log(manager.getProducts());

manager.addProduct("arroz", "Grano fino", 350, "sin imagen", "abc124", 100);

manager.addProduct("fideos", "Mostacholes", 200, "sin imagen", "abc125", 150 );manager.addProduct("lata de arbejas", "en conserva", 200, "sin imagen", "abc126", 120 );


console.log(manager.getProducts());

manager.getProductById(3)
manager.getProductById(5)