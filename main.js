// Slider ------------------------------------------------
silderNum1()

function silderNum1() {

    

    const sildeBox = document.querySelector(".silde_elements");
    const buttonLeft = document.querySelector(".silde_left");
    const buttonRight = document.querySelector(".silde_right");
    let count = 0

    buttonRight.addEventListener('click', ()=> {

        if(count < 7) {
            buttonRight.classList.remove('none');
            buttonLeft.classList.remove('none');
            count++
            if (count == 7) {
                buttonRight.classList.add('none');
            }
            
        } else {
            buttonRight.classList.remove('none');
            count = count
        }
        sildeBox.style.left = `${"-" + (count * 225)}px`;

    });

    buttonLeft.addEventListener('click', ()=> {

        if(count > 0) {
            buttonLeft.classList.remove('none');
            buttonRight.classList.remove('none');
            count--
            if (count == 0) {
                buttonLeft.classList.add('none');
            } 
        } else {
            buttonLeft.classList.remove('none');
            count = count
        }
        sildeBox.style.left = `${"-" + (count * 225)}px`;

    });

}

silderNum2()

function silderNum2() {

    const sildeBox2 = document.querySelector(".silde4_elements");
    const buttonLeft2 = document.querySelector(".silde_left_2");
    const buttonRight2 = document.querySelector(".silde_right_2");
    let count2 = 0

    buttonRight2.addEventListener('click', ()=> {

        if(count2 < 5) {
            buttonRight2.classList.remove('none');
            buttonLeft2.classList.remove('none');
            count2++
            if (count2 == 5) {
                buttonRight2.classList.add('none');
            }
            
        } else {
            buttonRight2.classList.remove('none');
            count2 = count2
        }

        sildeBox2.style.left = `${"-" + (count2 * 225)}px`;

    });

    buttonLeft2.addEventListener('click', ()=> {

        if(count2 > 0) {
            buttonLeft2.classList.remove('none');
            buttonRight2.classList.remove('none');
            count2--
            if (count2 == 0) {
                buttonLeft2.classList.add('none');
            } 
        } else {
            buttonLeft2.classList.remove('none');
            count2 = count2
        }
        
        sildeBox2.style.left = `${"-" + (count2 * 225)}px`;

    });




}

silderNum3()

function silderNum3() {

    const sildeBox3 = document.querySelector(".silde5_elements");
    const buttonLeft3 = document.querySelector(".silde_left_3");
    const buttonRight3 = document.querySelector(".silde_right_3");
    let count3 = 0

    buttonRight3.addEventListener('click', ()=> {

        if(count3 < 4) {
            buttonRight3.classList.remove('none');
            buttonLeft3.classList.remove('none');
            count3++
            if (count3 == 4) {
                buttonRight3.classList.add('none');
            }
            
        } else {
            buttonRight3.classList.remove('none');
            count3 = count3
        }

        sildeBox3.style.left = `${"-" + (count3 * 281.5)}px`;
    });

    buttonLeft3.addEventListener('click', ()=> {

        if(count3 > 0) {
            buttonLeft3.classList.remove('none');
            buttonRight3.classList.remove('none');
            count3--
            if (count3 == 0) {
                buttonLeft3.classList.add('none');
            } 
        } else {
            buttonLeft3.classList.remove('none');
            count3 = count3
        }
            
        sildeBox3.style.left = `${"-" + (count3 * 281.5)}px`;

    });

}

silderNum4()

function silderNum4() {

    const sildeBox3 = document.querySelector(".silde7_elements");
    const buttonLeft3 = document.querySelector(".silde_left_4");
    const buttonRight3 = document.querySelector(".silde_right_4");
    let count3 = 0

    buttonRight3.addEventListener('click', ()=> {

        if(count3 < 4) {
            buttonRight3.classList.remove('none');
            buttonLeft3.classList.remove('none');
            count3++
            if (count3 == 4) {
                buttonRight3.classList.add('none');
            }
            
        } else {
            buttonRight3.classList.remove('none');
            count3 = count3
        }

        sildeBox3.style.left = `${"-" + (count3 * 281.5)}px`;
    });

    buttonLeft3.addEventListener('click', ()=> {

        if(count3 > 0) {
            buttonLeft3.classList.remove('none');
            buttonRight3.classList.remove('none');
            count3--
            if (count3 == 0) {
                buttonLeft3.classList.add('none');
            } 
        } else {
            buttonLeft3.classList.remove('none');
            count3 = count3
        }
            
        sildeBox3.style.left = `${"-" + (count3 * 281.5)}px`;
    });

}


grillebutton()

function grillebutton() {

    const button101 = document.querySelector(".t101");
    const button102 = document.querySelector(".t102");
    const button103 = document.querySelector(".t103");

    let zoneTxt = document.querySelector(".test_dyn10");

    button102.addEventListener("click", function() {

        button102.classList.add("active10");
        button101.classList.remove("active10");
        button103.classList.remove("active10");

        zoneTxt.innerHTML = `
        <div>Zermatt<br>
        556 h??tels</div>
        <div>Lucerne<br>
        188 h??tel</div>
        <div>Lugano<br>
        236 h??tels</div>
        <div>Lausanne<br>
        88 h??tels</div>
        <div>Interlaken<br>
        227 h??tels</div>
        <div>Gen??ve<br>
        247 h??tels</div>
        <div>Amsterdam<br>
        1 893 h??tels</div>
        <div>Ostende<br>
        424 h??tels</div>
        <div>Bruxelles<br>
        1 157 h??tels</div>
        <div>Luxembourg<br>
        217 h??tels</div>
        <div>Trouville-sur-Mer<br>
        226 h??tels</div>
        <div>Tours<br>
        246 h??tels</div>
        <div>Strasbourg<br>
        675 h??tels</div>
        <div>Saint-Rapha??l<br>
            534 h??tels</div>
        <div>Saint-Malo<br>
            545 h??tels</div>
        <div>Saint-Jean-de-Luz<br>
            347 h??tels</div>
        <div>Les Saintes-Maries-de-la-Mer<br>
            165 h??tels</div>
        <div>Royan<br>
            300 h??tels</div>
        <div>Rouen<br>
            392 h??tels</div>
        <div>Rennes<br>
            241 h??tels</div>
        <div>Porto-Vecchio<br>
            566 h??tels</div>
        <div>Perpignan<br>
            194 h??tels</div>
        <div>Nantes<br>
            438 h??tels</div>
        <div>Les Sables d??Olonne<br>
            682 h??tel</div>
        <div>Le Grau-du-Roi<br>
            839 h??tels</div>
        <div>Grenoble<br>
            197 h??tels</div>
        <div>G??rardmer<br>
            286 h??tels</div>
        <div>69 h??tels<br>
        La Baule</div>
        <div>Collioure<br>
            224 h??tels</div>
        <div>Clermont-Ferrand<br>
            131 h??tels</div>
            <div>Zermatt<br>
        556 h??tels</div>
        <div>Lucerne<br>
        188 h??tel</div>
        <div>Lugano<br>
        236 h??tels</div>
        <div>Lausanne<br>
        88 h??tels</div>
        <div>Interlaken<br>
        227 h??tels</div>
        <div>Gen??ve<br>
        247 h??tels</div>
        <div>Amsterdam<br>
        1 893 h??tels</div>
        <div>Ostende<br>
        424 h??tels</div>
        <div>Bruxelles<br>
        1 157 h??tels</div>
        <div>Luxembourg<br>
        217 h??tels</div>
        <div>Trouville-sur-Mer<br>
        226 h??tels</div>
        <div>Tours<br>
        246 h??tels</div>
        <div>Strasbourg<br>
        675 h??tels</div>
        <div>Saint-Rapha??l<br>
            534 h??tels</div>
        <div>Saint-Malo<br>
            545 h??tels</div>
        <div>Saint-Jean-de-Luz<br>
            347 h??tels</div>
        <div>Les Saintes-Maries-de-la-Mer<br>
            165 h??tels</div>
        <div>Royan<br>
            300 h??tels</div>
        <div>Rouen<br>
            392 h??tels</div>
        <div>Rennes<br>
            241 h??tels</div>
        <div>Porto-Vecchio<br>
            566 h??tels</div>
        <div>Perpignan<br>
            194 h??tels</div>
        <div>Nantes<br>
            438 h??tels</div>
        <div>Les Sables d??Olonne<br>
            682 h??tel</div>
        <div>Le Grau-du-Roi<br>
            839 h??tels</div>
        <div>Grenoble<br>
            197 h??tels</div>
        <div>G??rardmer<br>
            286 h??tels</div>
        <div>69 h??tels<br>
        La Baule</div>
        <div>Collioure<br>
            224 h??tels</div>
        <div>Clermont-Ferrand<br>
            131 h??tels</div>
        `;

    })

    button101.addEventListener("click", function() {

        button101.classList.add("active10");
        button102.classList.remove("active10");
        button103.classList.remove("active10");

        zoneTxt.innerHTML = `
        <div>
                    ??tat de New York<br>
                    5 390 ??tablissements
                </div>
                <div>
                    Province de Phuket<br>
                    5 495 ??tablissements
                </div>
                <div>
                    Bali<br>
                    12 681 ??tablissements
                </div>
                <div>
                    Santorin<br>
                    1 762 ??tablissements
                </div>
                <div>
                    Lac des Quatre-Cantons<br>
                    350 ??tablissements
                </div>
                <div>
                    ??le-de-France<br>
                    12 208 ??tablissements
                </div>
                <div>
                    Corse<br>
                    4 941 ??tablissements
                </div>
                <div>
                    Lac L??man<br>
                    1 564 ??tablissements
                </div>
                <div>
                    Koh Samui<br>
                    2 211 ??tablissements
                </div>
                <div>
                    Belle-??le-en-Mer<br>
                    187 ??tablissements
                </div>
                <div>
                    Lac d'Annecy<br>
                    938 ??tablissements
                </div>
                <div>
                    Grisons<br>
                    2 986 ??tablissements
                </div>
                <div>
                    Gorges du Verdon<br>
                    397 ??tablissements
                </div>
                <div>
                    Tahiti<br>
                    367 ??tablissements
                </div>
                <div>
                    Lub??ron<br>
                    1 471 ??tablissements
                </div>
                <div>
                    ??le de R??<br>
                    438 ??tablissements
                </div>
                <div>
                    Zanzibar<br>
                    834 ??tablissements
                </div>
                <div>
                    ??le d'Ol??ron<br>
                    307 ??tablissements
                </div>
                <div>
                    Canton du Tessin<br>
                    1 683 ??tablissements
                </div>
                <div>
                    Bora-Bora<br>
                    59 ??tablissement
                </div>
        `;

    })

    button103.addEventListener("click", function() {

        button103.classList.add("active10");
        button101.classList.remove("active10");
        button102.classList.remove("active10");

        zoneTxt.innerHTML = `
        <div>Le Grau-du-Roi<br>
            839 h??tels</div>
        <div>Grenoble<br>
            197 h??tels</div>
        <div>G??rardmer<br>
            286 h??tels</div>
        <div>69 h??tels<br>
        La Baule</div>
        <div>Collioure<br>
            224 h??tels</div>
        <div>Clermont-Ferrand<br>
            131 h??tels</div>
            <div>Zermatt<br>
        556 h??tels</div>
        <div>Lucerne<br>
        188 h??tel</div>
        <div>Lugano<br>
        236 h??tels</div>
        <div>Lausanne<br>
        88 h??tels</div>
        <div>Interlaken<br>
        227 h??tels</div>
        <div>Gen??ve<br>
        247 h??tels</div>
        <div>Amsterdam<br>
        1 893 h??tels</div>
        <div>Ostende<br>
        424 h??tels</div>
        <div>Bruxelles<br>
        1 157 h??tels</div>
        <div>Luxembourg<br>
        217 h??tels</div>
        <div>Trouville-sur-Mer<br>
        226 h??tels</div>
        <div>Tours<br>
        246 h??tels</div>
        <div>Strasbourg<br>
        675 h??tels</div>
        <div>Saint-Rapha??l<br>
            534 h??tels</div>
        `;

    })

}


//-----------------------------------------------------


