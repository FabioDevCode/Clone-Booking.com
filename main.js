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

//-----------------------------------------------------


