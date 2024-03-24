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
</script>
<template>
    <div>
        <div v-if="!answer" class="question flex center">
            <h1>Ngoài bị điên ra bạn còn bị gì nữa không?</h1>
            <div class="answer">
                <button @click="answer = !answer">Có</button>
                <button class="ignoredButton" @click="randomPos" :style="{left: left + 'px', top: top + 'px'}">Không</button>
            </div>
        </div>
        <div v-if="answer" class="content flex center fade">
            <div class="weather--wrap flex center swipe-to-right" :class="{'swipe-to-left': showMore}">
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
            </div>
            <div v-if="showMore" class="weather--more swipe-fade-to-right">
                <p>no <br> more!</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.flex {
    display: flex;
}

.center {
    justify-content: center;
    align-items: center;
}

.question {
    flex-direction: column;
}

.answer .ignoredButton {
    position: relative;
    transition: all .5s;
}

.content {
    transition: all 1s;
}

.weather--wrap {
    width: 890px;
    height: 400px;
    background: rgb(0,141,218);
    background: linear-gradient(180deg, rgba(0,141,218,1) 0%, rgba(65,201,226,1) 90%);
    border-radius: 30px;
    gap: 40px;
    position: relative;
}

.weather {
    flex-direction: column;
    padding-top: 36px;
}

.weather-icon {
    width: 140px;
    height: 140px;
    background-color: #41C9E2;
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

.line {
    height: 90%;
    width: 2px;
    background-color: #F7EEDD;
    margin: 0 46px;
}

.weather-infor {
    position: relative;
}

.weather-desc {
    font-family: "Kanit", sans-serif;
    font-weight: 200;
    font-size: 32px;
    color: #F7EEDD;
}

.weather-degree {
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-size: 200px;
    color: #F7EEDD;
    padding-bottom: 80px;
}

.weather-infor .weather-desc {
    position: absolute;
    top: 54%;
    margin-top: 34px;
}

.weather--more-text {
    top: -12px;
    right: 20px;
    position: absolute;
}

.weather--more-text p {
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
}

.weather--more {
    width: 400px;
    height: 550px;
    background: rgb(0,141,218);
    background: linear-gradient(180deg, rgba(0,141,218,1) 0%, rgba(65,201,226,1) 100%);
    margin-left: 50px;
    border-radius: 30px;
    position: relative;
}

.weather--more p {
    font-size: 100px;
    text-align: center;
    font-weight: bold;
    color: #F7EEDD;
}

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