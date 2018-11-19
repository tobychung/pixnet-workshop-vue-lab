<template>
  <div class="canvas">
    <div id="totalCounter" ref="totalClickCounter" class="total-counter">{{$store.getters.profileLikes.data.num_liked}}</div>

    <div id="clap" class="clap-container">
        <i class="clap-icon" :class="iconClass"></i>
    </div>

    <div id="clicker" ref="clicker" class="click-counter">
        <span class="counter"></span>
    </div>

    <div id="sonar-clap" class="clap-container-sonar"></div>

    <div id="particles" class="particles-container">
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
    </div>

    <div id="particles-2" class="particles-container">
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
    </div>

    <div id="particles-3" class="particles-container">
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
        <div class="triangle">
            <div class="square"></div>
        </div>
    </div>

</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ClapHand',
  props: ['iconClass', 'likedId'],
  data () {
    return {
      accCounter: 0,
      totalCount: 0,
      minDeg: 1,
      maxDeg: 72,
      particlesClasses: [
      	{
          	class: "pop-top"
          },
          {
          	class: "pop-top-left"
          },
          {
          	class: "pop-top-right"
          },
          {
          	class: "pop-bottom-right"
          },
          {
          	class: "pop-bottom-left"
          },
      ]
    }
  },
  computed: {
    ...mapGetters([
      'loaded',
      'profileLikes'
    ]),
  },
  methods: {
    upClickCounter() {
        const {
            num_liked
        } = this.$store.getters.profileLikes.data;

        const clickCounter = this.$refs.clicker // document.getElementById("clicker");
        const totalClickCounter = this.$refs.totalClickCounter // document.getElementById('totalCounter');
    	this.accCounter ++;
    	clickCounter.children[0].innerText = '+' + this.accCounter;
        totalClickCounter.innerText = num_liked + this.accCounter;
        this.$store.commit('CLAP_INCREMENT', num_liked + 1);
        // this.totalCount++
        if (clickCounter.classList.contains('first-active')) {
    		this.runAnimationCycle(clickCounter, 'active');
        } else {
        	this.runAnimationCycle(clickCounter, 'first-active');
        }
        this.runAnimationCycle(totalClickCounter, 'fader');
        this.$store.dispatch('giveAClap', { likedId: this.likedId });

    },
    runAnimationCycle(el, className, duration) {
    	if (el && !el.classList.contains(className)) {
        	el.classList.add(className);
        } else {
        	el.classList.remove(className);
            void el.offsetWidth; // Trigger a reflow in between removing and adding the class name
            el.classList.add(className);
        }
    },
    runParticleAnimationCycle(el, className, duration) {
    	if (el && !el.classList.contains(className)) {
        	el.classList.add(className);
            setTimeout(() => {
            	el.classList.remove(className);
            }, duration);
        }
    },
    animateParticles(particles, dur) {
    	this.addRandomParticlesRotation(particles.id, this.minDeg, this.maxDeg);
        for(let i = 0; i < this.particlesClasses.length; i++) {
        	this.runParticleAnimationCycle(particles.children[i], this.particlesClasses[i].class, dur);
        }
        // Boolean functionality only to activate particles2, particles3 when needed
        particles.classList.add('animating');
        setTimeout(() => {
        	particles.classList.remove('animating');
        }, dur);
    },
    getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min  + 1)) + min;
    },
    addRandomParticlesRotation(particlesName, minDeg, maxDeg) {
    	const particles = document.getElementById(particlesName);
      const randomRotationAngle = this.getRandomInt(minDeg, maxDeg) + 'deg';
    	particles.style.transform = `rotate(${randomRotationAngle})`;
    }
  },
  mounted () {
    console.log('Lets clap bro')

    const {
        num_liked
    } = this.$store.getters.profileLikes.data;

    document.getElementById('clap').onmouseover = () => {
    	let sonarClap = document.getElementById('sonar-clap');
        sonarClap.classList.add('hover-active');
        setTimeout(() => {
        	sonarClap.classList.remove('hover-active');
        }, 2000);
    }
    document.getElementById('clap').onclick = () => {
    	const clap = document.getElementById('clap');
        const clickCounter = document.getElementById("clicker");
    	const particles = document.getElementById('particles');
        const particles2 = document.getElementById('particles-2');
        const particles3 = document.getElementById('particles-3');
        clap.classList.add('clicked');
        this.upClickCounter();
        this.runAnimationCycle(clap, 'scale');
        if (!particles.classList.contains('animating')) {
        	this.animateParticles(particles, 700);
        } else if(!particles2.classList.contains('animating')){
        	this.animateParticles(particles2, 700);
        } else if(!particles3.classList.contains('animating')) {
        	this.animateParticles(particles3, 700);
        }
        this.$emit('clap', num_liked)
    }
  }
}
</script>
<style lang="scss">
$default-clap-color: #03a87c;
.canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    position: relative;
    .total-counter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        margin-top: -90px;
        color: gray;
        font-family: sans-serif;
        font-size: 16px;
    }
    .total-counter.fader {
        animation: fade-in 1400ms forwards;
    }
    .clap-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 60px;
        height: 60px;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 50%;
        z-index: 2;
        background: #fff;
        cursor: pointer;
        .clap-icon {
            font-size: 30px;
            color: $default-clap-color;
            width: 30px;
            height: 30px;
        }
    }
    .clap-container:hover {
        border: 1px solid $default-clap-color;
    }
    .clap-container.scale {
        animation: scaleAndBack 700ms forwards;
    }
    .click-counter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        position: absolute;
        top: 132px;
        background-color: $default-clap-color;
        border-radius: 50%;
        z-index: 1;
        .counter {
            font-family: sans-serif;
            font-size: 14px;
            color: #fff;
        }
    }
    .click-counter.first-active {
        animation: first-bump-in 1s forwards;
    }
    .click-counter.active {
        animation: bump-in 1s forwards;
    }
    .clap-container-sonar {
        width: 60px;
        height: 60px;
        background: $default-clap-color;
        border-radius: 50%;
        position: absolute;
        opacity: 0;
        z-index: 0;
    }
    .hover-active {
        animation: sonar-wave 2s forwards;
    }
    .particles-container {
       display: flex;
       justify-content: center;
       align-items: center;
       width: 60px;
       height: 60px;
       position: absolute;
       /* border: 1px solid gray; */
       /* z-index: 3; */
        .triangle {
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 10px solid red;
            border-bottom: 4px solid transparent;
            position: absolute;
            .square {
                width: 5px;
                height: 5px;
                background: $default-clap-color;
                position: absolute;
                left: -15px;
                top: 0;
            }
        }
        .pop-top {
            animation: pop-top 1s forwards;
        }
        .pop-top-left {
            animation: pop-top-left 1s forwards;
        }
        .pop-top-right {
            animation: pop-top-right 1s forwards;
        }
        .pop-bottom-right {
            animation: pop-bottom-right 1s forwards;
        }
        .pop-bottom-left {
            animation: pop-bottom-left 1s forwards;
        }
    }
}
// * * * Animations * * * //
@keyframes sonar-wave {
    0% {
        opacity: 0.7;
    }
    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
// * * * Pop Animations * * * //
@keyframes pop-top {
    0% {
        transform: translate(0, 0) rotate(0);
        opacity: 0.4;
    }
    100% {
        transform: translate(0, -100px) rotate(0);
        opacity: 0;
    }
}
@keyframes pop-top-left {
    0% {
        transform: translate(0, 0) rotate(-55deg);
        opacity: 0.4;
    }
    100% {
        transform: translate(-100px, -50px) rotate(-55deg);
        opacity: 0;
    }
}
@keyframes pop-top-right {
    0% {
        transform: translate(0, 0) rotate(55deg);
        opacity: 0.4;
    }
    100% {
        transform: translate(100px, -50px) rotate(55deg);
        opacity: 0;
    }
}
@keyframes pop-bottom-right {
    0% {
        transform: translate(0, 0) rotate(135deg);
        opacity: 0.4;
    }
    100% {
        transform: translate(70px, 80px) rotate(135deg);
        opacity: 0;
    }
}
@keyframes pop-bottom-left {
    0% {
        transform: translate(0, 0) rotate(-135deg);
        opacity: 0.4;
    }
    100% {
        transform: translate(-70px, 80px) rotate(-135deg);
        opacity: 0;
    }
}
@keyframes first-bump-in {
    0% {
       transform: translateY(-65px);
       opacity: 1;
    }
    50% {
        transform: translateY(-80px);
        opacity: 1;
    }
    100% {
        transform: translateY(-100px);
        opacity: 0;
    }
}
@keyframes bump-in {
    0% {
       transform: translateY(-80px) scale(0.9);
       opacity: 1;
    }
    50% {
        transform: translateY(-80px) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) scale(1);
        opacity: 0;
    }
}
@keyframes scaleAndBack {
    0% {
       transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
}
</style>