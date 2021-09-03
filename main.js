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
        556 hôtels</div>
        <div>Lucerne<br>
        188 hôtel</div>
        <div>Lugano<br>
        236 hôtels</div>
        <div>Lausanne<br>
        88 hôtels</div>
        <div>Interlaken<br>
        227 hôtels</div>
        <div>Genève<br>
        247 hôtels</div>
        <div>Amsterdam<br>
        1 893 hôtels</div>
        <div>Ostende<br>
        424 hôtels</div>
        <div>Bruxelles<br>
        1 157 hôtels</div>
        <div>Luxembourg<br>
        217 hôtels</div>
        <div>Trouville-sur-Mer<br>
        226 hôtels</div>
        <div>Tours<br>
        246 hôtels</div>
        <div>Strasbourg<br>
        675 hôtels</div>
        <div>Saint-Raphaël<br>
            534 hôtels</div>
        <div>Saint-Malo<br>
            545 hôtels</div>
        <div>Saint-Jean-de-Luz<br>
            347 hôtels</div>
        <div>Les Saintes-Maries-de-la-Mer<br>
            165 hôtels</div>
        <div>Royan<br>
            300 hôtels</div>
        <div>Rouen<br>
            392 hôtels</div>
        <div>Rennes<br>
            241 hôtels</div>
        <div>Porto-Vecchio<br>
            566 hôtels</div>
        <div>Perpignan<br>
            194 hôtels</div>
        <div>Nantes<br>
            438 hôtels</div>
        <div>Les Sables dʼOlonne<br>
            682 hôtel</div>
        <div>Le Grau-du-Roi<br>
            839 hôtels</div>
        <div>Grenoble<br>
            197 hôtels</div>
        <div>Gérardmer<br>
            286 hôtels</div>
        <div>69 hôtels<br>
        La Baule</div>
        <div>Collioure<br>
            224 hôtels</div>
        <div>Clermont-Ferrand<br>
            131 hôtels</div>
            <div>Zermatt<br>
        556 hôtels</div>
        <div>Lucerne<br>
        188 hôtel</div>
        <div>Lugano<br>
        236 hôtels</div>
        <div>Lausanne<br>
        88 hôtels</div>
        <div>Interlaken<br>
        227 hôtels</div>
        <div>Genève<br>
        247 hôtels</div>
        <div>Amsterdam<br>
        1 893 hôtels</div>
        <div>Ostende<br>
        424 hôtels</div>
        <div>Bruxelles<br>
        1 157 hôtels</div>
        <div>Luxembourg<br>
        217 hôtels</div>
        <div>Trouville-sur-Mer<br>
        226 hôtels</div>
        <div>Tours<br>
        246 hôtels</div>
        <div>Strasbourg<br>
        675 hôtels</div>
        <div>Saint-Raphaël<br>
            534 hôtels</div>
        <div>Saint-Malo<br>
            545 hôtels</div>
        <div>Saint-Jean-de-Luz<br>
            347 hôtels</div>
        <div>Les Saintes-Maries-de-la-Mer<br>
            165 hôtels</div>
        <div>Royan<br>
            300 hôtels</div>
        <div>Rouen<br>
            392 hôtels</div>
        <div>Rennes<br>
            241 hôtels</div>
        <div>Porto-Vecchio<br>
            566 hôtels</div>
        <div>Perpignan<br>
            194 hôtels</div>
        <div>Nantes<br>
            438 hôtels</div>
        <div>Les Sables dʼOlonne<br>
            682 hôtel</div>
        <div>Le Grau-du-Roi<br>
            839 hôtels</div>
        <div>Grenoble<br>
            197 hôtels</div>
        <div>Gérardmer<br>
            286 hôtels</div>
        <div>69 hôtels<br>
        La Baule</div>
        <div>Collioure<br>
            224 hôtels</div>
        <div>Clermont-Ferrand<br>
            131 hôtels</div>
        `;

    })

    button101.addEventListener("click", function() {

        button101.classList.add("active10");
        button102.classList.remove("active10");
        button103.classList.remove("active10");

        zoneTxt.innerHTML = `
        <div>
                    État de New York<br>
                    5 390 établissements
                </div>
                <div>
                    Province de Phuket<br>
                    5 495 établissements
                </div>
                <div>
                    Bali<br>
                    12 681 établissements
                </div>
                <div>
                    Santorin<br>
                    1 762 établissements
                </div>
                <div>
                    Lac des Quatre-Cantons<br>
                    350 établissements
                </div>
                <div>
                    Île-de-France<br>
                    12 208 établissements
                </div>
                <div>
                    Corse<br>
                    4 941 établissements
                </div>
                <div>
                    Lac Léman<br>
                    1 564 établissements
                </div>
                <div>
                    Koh Samui<br>
                    2 211 établissements
                </div>
                <div>
                    Belle-Île-en-Mer<br>
                    187 établissements
                </div>
                <div>
                    Lac d'Annecy<br>
                    938 établissements
                </div>
                <div>
                    Grisons<br>
                    2 986 établissements
                </div>
                <div>
                    Gorges du Verdon<br>
                    397 établissements
                </div>
                <div>
                    Tahiti<br>
                    367 établissements
                </div>
                <div>
                    Lubéron<br>
                    1 471 établissements
                </div>
                <div>
                    Île de Ré<br>
                    438 établissements
                </div>
                <div>
                    Zanzibar<br>
                    834 établissements
                </div>
                <div>
                    Île d'Oléron<br>
                    307 établissements
                </div>
                <div>
                    Canton du Tessin<br>
                    1 683 établissements
                </div>
                <div>
                    Bora-Bora<br>
                    59 établissement
                </div>
        `;

    })

    button103.addEventListener("click", function() {

        button103.classList.add("active10");
        button101.classList.remove("active10");
        button102.classList.remove("active10");

        zoneTxt.innerHTML = `
        <div>Le Grau-du-Roi<br>
            839 hôtels</div>
        <div>Grenoble<br>
            197 hôtels</div>
        <div>Gérardmer<br>
            286 hôtels</div>
        <div>69 hôtels<br>
        La Baule</div>
        <div>Collioure<br>
            224 hôtels</div>
        <div>Clermont-Ferrand<br>
            131 hôtels</div>
            <div>Zermatt<br>
        556 hôtels</div>
        <div>Lucerne<br>
        188 hôtel</div>
        <div>Lugano<br>
        236 hôtels</div>
        <div>Lausanne<br>
        88 hôtels</div>
        <div>Interlaken<br>
        227 hôtels</div>
        <div>Genève<br>
        247 hôtels</div>
        <div>Amsterdam<br>
        1 893 hôtels</div>
        <div>Ostende<br>
        424 hôtels</div>
        <div>Bruxelles<br>
        1 157 hôtels</div>
        <div>Luxembourg<br>
        217 hôtels</div>
        <div>Trouville-sur-Mer<br>
        226 hôtels</div>
        <div>Tours<br>
        246 hôtels</div>
        <div>Strasbourg<br>
        675 hôtels</div>
        <div>Saint-Raphaël<br>
            534 hôtels</div>
        `;

    })

}


//-----------------------------------------------------
