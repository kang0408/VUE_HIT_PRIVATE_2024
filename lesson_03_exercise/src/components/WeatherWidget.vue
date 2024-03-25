<script setup>
    import {ref, reactive, computed} from 'vue';

    const left = ref(0);
    const top = ref(0);

    const randomPos = () => {
        let i = Math.floor(Math.random() * 500) + 1;
        let j = Math.floor(Math.random() * 500) + 1;

        left.value = i;
        top.value = j;
    }

    const answer = ref(false);
    const showMore = ref(false);

    var config = {
        cUrl: 'https://api.countrystatecity.in/v1/countries',
        cKey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
    }

    const countries = ref();    // This variables is to store country's list
    const selectedCountryCode = ref(""); // This variables is to store country's code - example: VN

    function loadCountries() {
        let apiEndPoint = config.cUrl;

        fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.cKey}})
            .then(res => res.json())
            .then(data => {
                countries.value = data;
                console.log(data);
            })
            .catch(error => console.error(error));
    }

    const states = ref(); // This variables is to store state's list
    const selectedStatesCode = ref(""); // This variables is to store state's code

    function loadStates() {
        console.log(selectedCountryCode.value);
        selectedCityId.value = ' ';
        fetch(`${config.cUrl}/${selectedCountryCode.value}/states`, {headers: {"X-CSCAPI-KEY": config.cKey}})
            .then(res => res.json())
            .then(data => {
                states.value = data;
                console.log(data);
            })
            .catch(error => console.error(error));
    }

    const cities = ref(); // This variables is to store state's list
    const selectedCityId = ref(" "); // This variables is to store state's id

    function loadCities() {
        console.log(selectedCountryCode.value, selectedStatesCode.value);

        fetch(`${config.cUrl}/${selectedCountryCode.value}/states/${selectedStatesCode.value}/cities`, {headers: {"X-CSCAPI-KEY": config.cKey}})
            .then(res => res.json())
            .then(data => {
                cities.value = data;
                console.log(data);
            })
            .catch(error => console.error(error));
    }

    window.onload = loadCountries;

</script>
<template>
    <div>
        <div v-if="!answer" class="question fade flex center">
            <h1>Ngoài bị điên ra bạn còn bị gì nữa không?</h1>
            <div class="answer">
                <button @click="answer = !answer">Có</button>
                <button class="ignoredButton" @click="randomPos" :style="{left: left + 'px', top: top + 'px'}">Không</button>
            </div>
        </div>
        <div v-if="answer" class="content flex center fade">
            <div class="weather--wrap flex center swipe-to-right" :class="{'swipe-to-left': showMore}">
                <div class="location">
                    <h3>Select Country, State, City</h3>
                    <div class="location-wrap">
                        <select class="country" @change="loadStates" v-model="selectedCountryCode">
                            <option disabled value="">Select country</option>
                            <option v-for="(item, index) in countries" :key="index" :value="item.iso2">{{ item.name}}</option>
                        </select>
                        <select class="state" @change="loadCities" v-model="selectedStatesCode">
                            <option disabled value="">Select state</option>
                            <option v-for="(item, index) in states" :key="index" :value="item.iso2">{{ item.name }}</option>
                        </select>
                        <select class="city" v-model="selectedCityId">
                            <option disabled value="">Select city</option>
                            <option v-for="(item, index) in cities" :key="index" :value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="weather flex center">
                    <div class="weather-icon">
                        <img src="../assets/10d@2x 1.png" alt="">
                    </div>
                    <p class="weather-desc">Mostly cloudy</p>
                </div>
                <div class="line"></div>
                <div class="weather-infor">
                    <p class="weather-degree">21°C</p>
                    <p class="weather-desc">Doha, Quatar</p>
                </div>
                <div class="weather--more-text" @click="showMore = !showMore">
                    <p>+ More</p>
                </div>
                <div class="back-btn" @click="answer = !answer">&lt;</div>
            </div>
            <div v-if="showMore" class="weather--more swipe-fade-to-right">
                <div class="exit" @click="showMore = !showMore">x</div>
                <p>no <br> more!</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

$primaryColor: #008DDA;
$secondColor: #41C9E2;
$thirdColor: #F7EEDD;
$fontText: "Kanit", sans-serif;

.flex {
    display: flex;
}

.center {
    justify-content: center;
    align-items: center;
}

.box-shadow {
    -webkit-box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.32);
    box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.32);
}

.linear-bg {
    background: linear-gradient(180deg, $primaryColor 0%, $secondColor 90%);
}

.question {
    flex-direction: column;
}

.answer {
    .ignoredButton {
        position: relative;
        transition: all .5s;
    } 
}

.content {
    transition: all 1s;
    position: relative;

    .weather--wrap {
        width: 890px;
        height: 400px;
        border-radius: 30px;
        gap: 40px;
        position: relative;
        @extend .linear-bg;
        @extend .box-shadow;

        
        .location {
            position: fixed;
            top: 50px;
            text-align: center;
            width: 60%;
            z-index: 999;

            .location-wrap {
                display: flex;
                justify-content: space-around;
            }

            select {
                font-size: 20px;
                width: 30%;
                padding: 5px;
                border: 2px solid;
                border-radius: 5px;
            }

            select:hover {
                border-color: #008DDA;
                cursor: pointer;
            }
        }

        .weather {
            flex-direction: column;
            padding-top: 36px;

            .weather-icon {
                width: 140px;
                height: 140px;
                background-color: $secondColor;
                border-radius: 30px;
                overflow: hidden;
            }

            .weather-icon img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .weather-icon img:hover {
                transform: scale(1.1);
                transition: all .3s;
                cursor: pointer;
            }
        }

        .weather-desc {
            font-family: $fontText;
            font-weight: 200;
            font-size: 32px;
            color: $thirdColor;
        }

        .line {
            height: 90%;
            width: 2px;
            background-color: $thirdColor;
            margin: 0 46px;
        }

        .weather-infor {
            position: relative;

            .weather-degree {
                font-family: $fontText;
                font-weight: 500;
                font-size: 200px;
                color: $thirdColor;
                padding-bottom: 80px;
            }

            .weather-desc {
                position: absolute;
                top: 54%;
                margin-top: 34px;
            }
        }

        .weather--more-text {
            top: -12px;
            right: 20px;
            position: absolute;
        }

        .weather--more-text:hover {
            color: $thirdColor;
        }

        .weather--more-text p {
            font-size: 18px;
            font-weight: 400;
            cursor: pointer;
        }

        .back-btn {
            font-size: 22px;
            font-weight: bold;
            position: absolute;
            top: 0;
            left: 12px;
            cursor: pointer;
        }

        .back-btn:hover {
            color: $thirdColor;
        }
    }

    .weather--more {
        width: 400px;
        height: 550px;
        margin-left: 50px;
        border-radius: 30px;
        position: relative;
        @extend .linear-bg;
        @extend .box-shadow;

        .exit {
            position: absolute;
            right: 20px;
            top: 0px;
            font-weight: 500;
            font-size: 22px;
            cursor: pointer;
        }

        .exit:hover {
            color: $thirdColor;
        }

        p {
            font-size: 100px;
            text-align: center;
            font-weight: bold;
            color: $thirdColor;
        }
    }
}

/* Animation */
.fade {
    animation: fade 2s;
}

@keyframes fade {
    0% { opacity: 0;}
    100% {opacity: 1;}
}

.swipe-fade-to-right {
    animation: swipe-fade-to-right 2s;
}

@keyframes swipe-fade-to-right {
    0% {
        left: -225px;
        opacity: 0;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        left: 0;
        opacity: 1;
    }
}

.swipe-to-right {
    animation: swipe-to-right 2s;
}

@keyframes swipe-to-right {
    0% {
        left: -225px;
    }
    100% {
        left: 0;
    }
}

.swipe-to-left {
    animation: swipe-to-left 2s;
}

@keyframes swipe-to-left {
    0% {
        right: -225px;
    }
    100% {
        right: 0;
    }
}
</style>