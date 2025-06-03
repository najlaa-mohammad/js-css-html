    const products = [
        { name: "keyboard", video: "https://youtu.be/3gZC5763wYk" },
        { name: "mouse", video: "https://www.youtube.com/embed/3HJmM9r7x6o" },
        { name: "pen", video: "https://www.youtube.com/embed/8KwPBL8zQf0" },
        { name: "pencil", video: "https://www.youtube.com/embed/4YeS4mDdK5E" },
        { name: "eraser", video: "https://www.youtube.com/embed/FPBgv96rDiM" }
    ];
    
    const colors = ["red", "blue", "green", "yellow", "black"];
    const showProducts = 5;
    
    function displayProducts(filter = "all") {
        const container = document.getElementById("productList");
        container.innerHTML = "";
    
        for (let i = 0; i < showProducts; i++) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.onclick = () => showVideo(products[i].video);
    
        const title = document.createElement("h2");
        title.innerText = `[${i + 1}] ${products[i].name}`;
        productCard.appendChild(title);
    
        colors.forEach(color => {
            if (filter === "all" || color === filter) {
            const colorItem = document.createElement("p");
            colorItem.className = "color";
            colorItem.innerText = color;
            productCard.appendChild(colorItem);
            }
        });
    
        container.appendChild(productCard);
        }
    }
    
    function filterColors(color) {
        displayProducts(color);
    }
    
    function showVideo(videoUrl) {
        const modal = document.getElementById("videoModal");
        const iframe = document.getElementById("videoFrame");
        iframe.src = videoUrl;
        modal.style.display = "block";
    }
    
    function closeVideo() {
        const modal = document.getElementById("videoModal");
        const iframe = document.getElementById("videoFrame");
        iframe.src = "";
        modal.style.display = "none";
    }
    
    window.onload = () => {
        displayProducts();
    };
    