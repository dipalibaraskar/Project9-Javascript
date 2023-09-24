
// Write your code here
document.addEventListener("DOMContentLoaded", function () {
    // console.log("DOM content loaded successfully!");
    // alertFunction();

    var input = document.getElementById('toggleswitch');
    var outputtext = document.getElementById('status');

    input.addEventListener('change', function () {
        // alert("outputtext testing");
        document.body.classList.toggle('dark');

        // if (this.checked) {
        //      document.body.classList.toggle('dark');
        // } else {
        //     document.body.classList.toggle('dark');
        // }
    });



    function alertFunction() {
        alert("DOM content loaded successfully testing");
    }


    const images = document.querySelectorAll('#slider img');
    const previousImage = document.getElementById("prev");
    const nextImage = document.getElementById("next");

    let currentIndex = 0;

    function reset() {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
        }
    }

    function initializeSlider() {
        reset();
        images[currentIndex].classList.add('active');
    }

    function slideLeft() {
        reset();
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        images[currentIndex].classList.add('active');
    }

    function slideRight() {
        reset();
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        images[currentIndex].classList.add('active');
    }

    initializeSlider();

    previousImage.addEventListener('click', function () {
        slideLeft();
    });

    nextImage.addEventListener('click', function () {
        slideRight();
    });

});


document.addEventListener("readystatechange", function () {
    console.log("Ready state changed: " + document.readyState)
})

window.addEventListener("load", function () {
    console.log("Page loaded successfully!")
})



// const checkbox = document.getElementById('mode-toggle');
// alert("testing2");
// checkbox.addEventListener('change', (e) => {
//     alert("This is");
//     document.body.classList.toggle('dark');

// }

// );


