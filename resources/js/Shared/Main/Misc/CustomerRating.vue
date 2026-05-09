<template>
    <div class="">
        <h2 class="text-center font-montserrat sm:text-3xl text-2xl font-bold mb-2">See what our customers think</h2>
        <p class="text-center md:text-xl sm:text-lg text-sm font-light mb-4">Browse through our customers testimonials.</p>
        <div class="flex items-center justify-center">
            <div class="rating flex items-center justify-center bg-gray-100">
                <span class="font-montserrat font-extrabold text-sm mr-2.5">RATED SUPERB</span>
                <span class="flex items-center text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="w-full md:h-[300px] h-auto pb-8 md:mt-0 sn:mt-12 mt-6 relative select-none">
            <div class="review-wrapper mx-auto md:h-full flex items-center justify-center overflow-hidden" ref="reviewTray">
                <div class="flex items-start justify-start flex-nowrap w-full transition-transform duration-700 ease-in-out" :style="`transform: translateX(${translate}px)`">
                    <div v-for="review in reviews" class="lg:w-1/3 md:w-1/2 w-full md:p-7 p-5 shrink-0 grow-0">
                        <span class="flex items-center justify-center text-yellow-400">
                            <svg v-for="rating in review.rating" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                        <span class="block text-center text-sm my-4">{{ review.message }}</span>
                        <span class="block text-center text-wheelfit-600 font-montserrat uppercase font-bold md:text-xl text-lg">{{ review.author }}</span>
                    </div>
                </div>
            </div>
            <div class="md:hidden flex items-center justify-center flex-row space-x-3">
                <button @click="moveReviews(-1)" class="bg-gray-800 text-white w-10 h-10 outline-0 border-0 text-3xl" type="button" name="button">&lt;</button>
                <button @click="moveReviews(1)" class="bg-gray-800 text-white w-10 h-10 outline-0 border-0 text-3xl" type="button" name="button">&gt;</button>
            </div>
            <button @click="moveReviews(-1)" class="md:block hidden absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 m-1 outline-0 border-0 text-3xl" type="button" name="button">&lt;</button>
            <button @click="moveReviews(1)" class="md:block hidden absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 m-1 outline-0 border-0 text-3xl" type="button" name="button">&gt;</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const reviews = [
    {
        rating: 5,
        author: 'Tracy Wong',
        message: 'I initially phoned Malik on his mobile and then sent him my car tyre details, my location including photo on WhstsApp. He stuck to the ball park costs...',
    },
    {
        rating: 5,
        author: 'Catherine',
        message: 'Speedy response to phone call, and call out.  Very efficient, fair price - job done!  Would recommend.',
    },
    {
        rating: 5,
        author: 'Gavin Hoh',
        message: 'Excellent customer services and job well done !  Highly recommended',
    },
    {
        rating: 5,
        author: 'Paul',
        message: 'Excellent prompt & professional service. Highly recommended',
    },
    {
        rating: 5,
        author: 'Jasmin Freeman',
        message: 'I am so grateful for the service that was provided! I called whilst broken down on a dual carriage way, 120 miles away from home with two flat tyres!!...',
    },
    {
        rating: 5,
        author: 'Rebecca Cooper',
        message: 'Tyres Anywhere LTD came out today to sort my tyre out after a bad blowout, they gave me a quote straight away and were with me within the hour even though I was...',
    },
    {
        rating: 5,
        author: 'Christopher Arkell',
        message: 'Superb service, great price came to help in no time highly recommended',
    },
    {
        rating: 5,
        author: 'Darren Smith',
        message: 'I called at 3am on a Saturday night/Sunday morning due to a puncture and no spare in my model of car.  Just over an hour later I was back on the road...',
    },
    {
        rating: 5,
        author: 'Waleed Humayun',
        message: 'Great service, arrived and changed our tyre within 35 mins of our call.',
    },
    {
        rating: 5,
        author: 'Aaron Filmer',
        message: 'Fantastic service!!! Out 3 companies I called at 7:30am they were the only ones who answered! They ordered 2 tyres there and then with a promise of fi...',
    },
    {
        rating: 5,
        author: 'Joseph Alleyne',
        message: 'Great service! Gave them a call and we’re out to me within half hr!',
    },
    {
        rating: 5,
        author: 'Ben Chappell',
        message: 'Just phone the number - problem solved. Very helpful chap came within 40 mins of phoning, sorted it all out for us. Price they charged was pretty reas...',
    },
    {
        rating: 5,
        author: '上燕梁',
        message: 'Very good service！My car broke down near Bicester! AA is so expensive so I call them! And it help! The price is reasonable and provide good service',
    },
    {
        rating: 5,
        author: 'Steve Jones',
        message: 'Lifesaver! Had a blown tyre on the M40 and they came out in 30 minutes and fitted the tyre perfectly allowing us to get on with our weekend!',
    },
    {
        rating: 5,
        author: 'Hugo French',
        message: 'Excellent service from Malik, especially given he came out at 6:30pm on a Saturday. Efficiently fitted new tyre to wheel and was great value too. Woul...',
    },
    {
        rating: 5,
        author: 'Austin Yandoon',
        message: 'Very quick on coming to me. Changed my flat tyre fast. 10/10 thanks',
    },
    {
        rating: 5,
        author: 'Fleur Brading',
        message: 'Amazing service - thank you Malek! Only place open on bank holiday, rapid and professional service, fair price. Highly recommend',
    },
    {
        rating: 5,
        author: 'Hamed Izadpanah',
        message: 'Amazing service, Malek was with us in 30 minutes with the correct spare tire and we were back on the road in 15 minutes!',
    },
    {
        rating: 5,
        author: 'Agata Kajzer',
        message: 'Very quick response, professional service, very good after care support service, I would highly recommend.',
    },
    {
        rating: 5,
        author: 'Paula Nowlan',
        message: 'Absolutely amazing service and got me out of a jam that the RAC could not help me out with thank you guys so so much',
    },
    {
        rating: 5,
        author: 'Tom Lawson',
        message: 'Highly recommended. Got me out of a tricky situation in good time. Serves London-end of M40 corridor. Very happy to pay a premium for this level of ser...',
    },
    {
        rating: 5,
        author: 'Charlotte Pontin',
        message: 'Brilliant service and very efficient! They were out to us within half an hour and had replaced two flat tyres within one hour of the call! Definitely r...',
    },
]
shuffle(reviews);

const translate = ref(0);
const index = ref(0);

const reviewTray = ref(null);
const reviewsPerSlide = ref(0);

const reviewPages = computed(() => {
    return Math.ceil((reviews.length / reviewsPerSlide.value))
})

onMounted(() => {
    window.addEventListener('resize', setReviewsPerSlide);
    setReviewsPerSlide();
})
onUnmounted(() => {
    window.removeEventListener('resize', setReviewsPerSlide);
})
function setReviewsPerSlide() {
    reviewsPerSlide.value = getReviewsPerSlide();
    translate.value = 0;
    index.value = 0;
}
function getReviewsPerSlide(){
    let width = window.innerWidth;

    if(width >= 1024){
        return 3;
    }else if(width < 1024 && width >= 768){
        return 2;
    }else{
        return 1;
    }
}

function moveReviews(dir){
    let newIndex = index.value + dir;

    if(newIndex >= reviewPages.value) return;
    if(newIndex < 0) return;

    index.value = newIndex;
    translate.value = -index.value * reviewTray.value.clientWidth;
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

</script>

<style scoped>
.rating{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 7px 20px;
}
.review-wrapper{
    width: 100%;
}
@media screen and (min-width: 768px) {
    .review-wrapper {
        width: calc(100% - 100px);
    }
}
</style>
