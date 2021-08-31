// Slider ------------------------------------------------
silderNum1()

function silderNum1() {

    const sildeBox = document.querySelector(".bloc_03_sildebox");
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

        sildeBox.innerHTML = `
        <div class="silde_elements" style="left: ${"-" + (count * 225)}px">

                        <div class="card_silde">
                            <img src="./images/type/hotels.jpg" alt="hotels">
                            <div>
                                <div class="card_silde_title">Hôtels</div>
                                <p>802 409 hôtels</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/appartements.jpg" alt="appartements">
                            <div>
                                <div class="card_silde_title">Appartements</div>
                                <p>805 700 appartements</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/villa.jpg" alt="villas">
                            <div>
                                <div class="card_silde_title">Villas</div>
                                <p>406 020 villas</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/chalet.jpg" alt="chalets">
                            <div>
                                <div class="card_silde_title">Villas</div>
                                <p>31 756 chalets</p>
                            </div>
                        </div>
                        
                        <div class="card_silde">
                            <img src="./images/type/complexeh.jpg" alt="complexes hôteliers">
                            <div>
                                <div class="card_silde_title">Complexes hôteliers</div>
                                <p>17 466 complexes hôteliers</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/camping.jpg" alt="camping">
                            <div>
                                <div class="card_silde_title">Campings</div>
                                <p>10 984 campings</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/luxe.jpg" alt="maison de luxe">
                            <div>
                                <div class="card_silde_title">Maisons de luxes</div>
                                <p>2 220 maisons de luxes</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/tinyhouse.jpg" alt="tiny house">
                            <div>
                                <div class="card_silde_title">Tiny houses</div>
                                <p>356 tiny houses</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/riad.jpg" alt="riads">
                            <div>
                                <div class="card_silde_title">Riads</div>
                                <p>1 041 riads</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/apparthotel.jpg" alt="appartements hôtels">
                            <div>
                                <div class="card_silde_title">Appart'hôtels</div>
                                <p>33 383 appart'hôtels</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/maisonvac.jpg" alt="maison de vacences">
                            <div>
                                <div class="card_silde_title">Maisons vacances</div>
                                <p>12 631 maisons de vacances</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/motel.jpg" alt="motels">
                            <div>
                                <div class="card_silde_title">Motel</div>
                                <p>11 315 motels</p>
                            </div>
                        </div>

                    </div>
        
        `;

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

        sildeBox.innerHTML = `
        <div class="silde_elements" style="left: ${"-" + (count * 225)}px">

                        <div class="card_silde">
                            <img src="./images/type/hotels.jpg" alt="hotels">
                            <div>
                                <div class="card_silde_title">Hôtels</div>
                                <p>802 409 hôtels</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/appartements.jpg" alt="appartements">
                            <div>
                                <div class="card_silde_title">Appartements</div>
                                <p>805 700 appartements</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/villa.jpg" alt="villas">
                            <div>
                                <div class="card_silde_title">Villas</div>
                                <p>406 020 villas</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/chalet.jpg" alt="chalets">
                            <div>
                                <div class="card_silde_title">Villas</div>
                                <p>31 756 chalets</p>
                            </div>
                        </div>
                        
                        <div class="card_silde">
                            <img src="./images/type/complexeh.jpg" alt="complexes hôteliers">
                            <div>
                                <div class="card_silde_title">Complexes hôteliers</div>
                                <p>17 466 complexes hôteliers</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/camping.jpg" alt="camping">
                            <div>
                                <div class="card_silde_title">Campings</div>
                                <p>10 984 campings</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/luxe.jpg" alt="maison de luxe">
                            <div>
                                <div class="card_silde_title">Maisons de luxes</div>
                                <p>2 220 maisons de luxes</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/tinyhouse.jpg" alt="tiny house">
                            <div>
                                <div class="card_silde_title">Tiny houses</div>
                                <p>356 tiny houses</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/riad.jpg" alt="riads">
                            <div>
                                <div class="card_silde_title">Riads</div>
                                <p>1 041 riads</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/apparthotel.jpg" alt="appartements hôtels">
                            <div>
                                <div class="card_silde_title">Appart'hôtels</div>
                                <p>33 383 appart'hôtels</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/maisonvac.jpg" alt="maison de vacences">
                            <div>
                                <div class="card_silde_title">Maisons vacances</div>
                                <p>12 631 maisons de vacances</p>
                            </div>
                        </div>

                        <div class="card_silde">
                            <img src="./images/type/motel.jpg" alt="motels">
                            <div>
                                <div class="card_silde_title">Motel</div>
                                <p>11 315 motels</p>
                            </div>
                        </div>

                    </div>
        
        `;
    });

}

silderNum2()

function silderNum2() {

    const sildeBox2 = document.querySelector(".bloc_04_sildebox");
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

        sildeBox2.innerHTML = `
        <div class="silde4_elements" style="left: ${"-" + (count2 * 225)}px">

                    <div class="card_silde">
                        <img src="./images/explore/amsterdam.jpg" alt="amsterdam">
                        <div>
                            <div class="card_silde_title">Amsterdam</div>
                            <p>3 761 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/bruxelles.jpg" alt="bruxelles">
                        <div>
                            <div class="card_silde_title">Bruxelles</div>
                            <p>595 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/budapest.jpg" alt="budapest">
                        <div>
                            <div class="card_silde_title">Budapest</div>
                            <p>1 403 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/edimbourg.jpg" alt="edimbourg">
                        <div>
                            <div class="card_silde_title">Edimbourg</div>
                            <p>736 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/lisbonne.jpg" alt="lisbonne">
                        <div>
                            <div class="card_silde_title">Lisbonne</div>
                            <p>1 164 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/londres.jpg" alt="londres">
                        <div>
                            <div class="card_silde_title">Londres</div>
                            <p>473 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/porto.jpg" alt="porto">
                        <div>
                            <div class="card_silde_title">Porto</div>
                            <p>636 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/stockholm.jpg" alt="stockholm">
                        <div>
                            <div class="card_silde_title">Stockholm</div>
                            <p>2 368 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/venise.jpg" alt="venise">
                        <div>
                            <div class="card_silde_title">Venise</div>
                            <p>157 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/vienne.jpg" alt="vienne">
                        <div>
                            <div class="card_silde_title">Vienne</div>
                            <p>589 établissements</p>
                        </div>
                    </div>

            </div>`;
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
            
        sildeBox2.innerHTML = `
        <div class="silde4_elements" style="left: ${"-" + (count2 * 225)}px">

                    <div class="card_silde">
                        <img src="./images/explore/amsterdam.jpg" alt="amsterdam">
                        <div>
                            <div class="card_silde_title">Amsterdam</div>
                            <p>3 761 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/bruxelles.jpg" alt="bruxelles">
                        <div>
                            <div class="card_silde_title">Bruxelles</div>
                            <p>595 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/budapest.jpg" alt="budapest">
                        <div>
                            <div class="card_silde_title">Budapest</div>
                            <p>1 403 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/edimbourg.jpg" alt="edimbourg">
                        <div>
                            <div class="card_silde_title">Edimbourg</div>
                            <p>736 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/lisbonne.jpg" alt="lisbonne">
                        <div>
                            <div class="card_silde_title">Lisbonne</div>
                            <p>1 164 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/londres.jpg" alt="londres">
                        <div>
                            <div class="card_silde_title">Londres</div>
                            <p>473 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/porto.jpg" alt="porto">
                        <div>
                            <div class="card_silde_title">Porto</div>
                            <p>636 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/stockholm.jpg" alt="stockholm">
                        <div>
                            <div class="card_silde_title">Stockholm</div>
                            <p>2 368 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/venise.jpg" alt="venise">
                        <div>
                            <div class="card_silde_title">Venise</div>
                            <p>157 établissements</p>
                        </div>
                    </div>

                    <div class="card_silde">
                        <img src="./images/explore/vienne.jpg" alt="vienne">
                        <div>
                            <div class="card_silde_title">Vienne</div>
                            <p>589 établissements</p>
                        </div>
                    </div>

            </div>`;

    });




}

silderNum3()

function silderNum3() {

    const sildeBox3 = document.querySelector(".bloc_05_sildebox");
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

        sildeBox3.innerHTML = `
        <div class="silde5_elements" style="left: ${"-" + (count3 * 281.5)}px">

            <div class="card_silde_2">
                <img src="./images/escape/athène.jpg" alt="athène">
                <div>
                    <div class="card_silde_title">Athène</div>
                    <p>Grèce</p>
                    <p>Dès <span>25 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/bucarest.jpg" alt="bucarest">
                <div>
                    <div class="card_silde_title">Bucarest</div>
                    <p>Roumanie</p>
                    <p>Dès <span>28 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/luxembourg.jpg" alt="luxembourg">
                <div>
                    <div class="card_silde_title">Luxembourg</div>
                    <p>Luxembourg</p>
                    <p>Dès <span>45 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/madrid.jpeg" alt="madrid">
                <div>
                    <div class="card_silde_title">Madrid</div>
                    <p>Espagne</p>
                    <p>Dès <span>32 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/monaco.jpeg" alt="monaco">
                <div>
                    <div class="card_silde_title">Monaco</div>
                    <p>Monaco</p>
                    <p>Dès <span>87 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/sofia.jpg" alt="sofia">
                <div>
                    <div class="card_silde_title">Sofia</div>
                    <p>Bulgarie</p>
                    <p>Dès <span>34 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/varsovie.jpg" alt="varsovie">
                <div>
                    <div class="card_silde_title">Varsovie</div>
                    <p>Pologne</p>
                    <p>Dès <span>26 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/zagreb.jpeg" alt="zagreb">
                <div>
                    <div class="card_silde_title">Zagreb</div>
                    <p>Croatie</p>
                    <p>Dès <span>45 €</span></p>
                </div>
            </div>

        </div>`;
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
            
        sildeBox3.innerHTML = `
        <div class="silde5_elements" style="left: ${"-" + (count3 * 281.5)}px">

            <div class="card_silde_2">
                <img src="./images/escape/athène.jpg" alt="athène">
                <div>
                    <div class="card_silde_title">Athène</div>
                    <p>Grèce</p>
                    <p>Dès <span>25 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/bucarest.jpg" alt="bucarest">
                <div>
                    <div class="card_silde_title">Bucarest</div>
                    <p>Roumanie</p>
                    <p>Dès <span>28 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/luxembourg.jpg" alt="luxembourg">
                <div>
                    <div class="card_silde_title">Luxembourg</div>
                    <p>Luxembourg</p>
                    <p>Dès <span>45 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/madrid.jpeg" alt="madrid">
                <div>
                    <div class="card_silde_title">Madrid</div>
                    <p>Espagne</p>
                    <p>Dès <span>32 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/monaco.jpeg" alt="monaco">
                <div>
                    <div class="card_silde_title">Monaco</div>
                    <p>Monaco</p>
                    <p>Dès <span>87 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/sofia.jpg" alt="sofia">
                <div>
                    <div class="card_silde_title">Sofia</div>
                    <p>Bulgarie</p>
                    <p>Dès <span>34 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/varsovie.jpg" alt="varsovie">
                <div>
                    <div class="card_silde_title">Varsovie</div>
                    <p>Pologne</p>
                    <p>Dès <span>26 €</span></p>
                </div>
            </div>

            <div class="card_silde_2">
                <img src="./images/escape/zagreb.jpeg" alt="zagreb">
                <div>
                    <div class="card_silde_title">Zagreb</div>
                    <p>Croatie</p>
                    <p>Dès <span>45 €</span></p>
                </div>
            </div>

        </div>`;

    });

}

silderNum4()

function silderNum4() {

    const sildeBox3 = document.querySelector(".bloc_07_sildebox");
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

        sildeBox3.innerHTML = `
        <div class="silde7_elements" style="left: ${"-" + (count3 * 281.5)}px">

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in01.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Villa Rokk</p>
                <p>Barcelone</p>
                <p class="price7">Dès 2 449 €</p>
            </div>
            <div class="card7_note">
                <div>9,5</div>
                <p><span>Exceptionnel </span>. 17 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in02.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Villa Domina</p>
                <p>Noyer</p>
                <p class="price7">Dès 79 €</p>
            </div>
            <div class="card7_note">
                <div>9,5</div>
                <p><span>Exceptionnel </span>. 967 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in03.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Appartamento Benincampi</p>
                <p>Rome</p>
                <p class="price7">Dès 206 €</p>
            </div>
            <div class="card7_note">
                <div>9,7</div>
                <p><span>Exceptionnel </span>. 77 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in04.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Casa Portuguesa Prata</p>
                <p>Lisbonne</p>
                <p class="price7">Dès 349 €</p>
            </div>
            <div class="card7_note">
                <div>8,7</div>
                <p><span>Exceptionnel </span>. 85 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in05.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Urbana Hipster Downtown</p>
                <p>Budapest</p>
                <p class="price7">Dès 2 449 €</p>
            </div>
            <div class="card7_note">
                <div>9,2</div>
                <p><span>Exceptionnel </span>. 53 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in06.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Villa Pollo</p>
                <p>Madrid</p>
                <p class="price7">Dès 2 449 €</p>
            </div>
            <div class="card7_note">
                <div>7,5</div>
                <p><span>Exceptionnel </span>. 38 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in07.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Atypiskt Hus</p>
                <p>Stockholm</p>
                <p class="price7">Dès 1 249 €</p>
            </div>
            <div class="card7_note">
                <div>10</div>
                <p><span>Exceptionnel </span>. 1 expérience vécue</p>
            </div>
        </div>

        <div class="card_silde_2 easter_egg">
        <img src="./images/note/moi.jpg" alt="un super développeur web">
        <div class="easter_egg_text">
            <div>Besoin d'un développeur web, front-end ?<br> Ne cherchez plus celui qui a créé ce site "clone" fait l'affaire.</div>

            <button id="easteregg"><a href="https://github.com/FabioDevCode" target="_blank">Découvrir son Github</a></button>
        </div>

    </div>

    </div>`;
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
            
        sildeBox3.innerHTML = `
        <div class="silde7_elements" style="left: ${"-" + (count3 * 281.5)}px">

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in01.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Villa Rokk</p>
                <p>Barcelone</p>
                <p class="price7">Dès 2 449 €</p>
            </div>
            <div class="card7_note">
                <div>9,5</div>
                <p><span>Exceptionnel </span>. 17 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in02.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Villa Domina</p>
                <p>Noyer</p>
                <p class="price7">Dès 79 €</p>
            </div>
            <div class="card7_note">
                <div>9,5</div>
                <p><span>Exceptionnel </span>. 967 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in03.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Appartamento Benincampi</p>
                <p>Rome</p>
                <p class="price7">Dès 206 €</p>
            </div>
            <div class="card7_note">
                <div>9,7</div>
                <p><span>Exceptionnel </span>. 77 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in04.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Casa Portuguesa Prata</p>
                <p>Lisbonne</p>
                <p class="price7">Dès 349 €</p>
            </div>
            <div class="card7_note">
                <div>8,7</div>
                <p><span>Exceptionnel </span>. 85 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in05.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Urbana Hipster Downtown</p>
                <p>Budapest</p>
                <p class="price7">Dès 2 449 €</p>
            </div>
            <div class="card7_note">
                <div>9,2</div>
                <p><span>Exceptionnel </span>. 53 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in06.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Villa Pollo</p>
                <p>Madrid</p>
                <p class="price7">Dès 2 449 €</p>
            </div>
            <div class="card7_note">
                <div>7,5</div>
                <p><span>Exceptionnel </span>. 38 expériences vécues</p>
            </div>
        </div>

        <div class="card_silde_2 card_silde_7">
            <img src="./images/note/in07.jpg" alt="chambre">
            <div class="card_silde7_text">
                <p>Atypiskt Hus</p>
                <p>Stockholm</p>
                <p class="price7">Dès 1 249 €</p>
            </div>
            <div class="card7_note">
                <div>10</div>
                <p><span>Exceptionnel </span>. 1 expérience vécue</p>
            </div>
        </div>

        <div class="card_silde_2 easter_egg">
        <img src="./images/note/moi.jpg" alt="un super développeur web">
        <div class="easter_egg_text">
            <div>Besoin d'un développeur web, front-end ?<br> Ne cherchez plus celui qui a créé ce site "clone" fait l'affaire.</div>

            <button id="easteregg"><a href="https://github.com/FabioDevCode" target="_blank">Découvrir son Github</a></button>
        </div>

    </div>

    </div>`;

    });

}
//-----------------------------------------------------


