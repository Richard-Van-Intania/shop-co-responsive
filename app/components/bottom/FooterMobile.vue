<script setup lang="ts">
const emailValue = useState<string>(uuidv4(), () => "");
function submitted() {
    debugClicked(emailValue.value);
}
</script>

<template>
    <div class="relative">
        <div class="h-[150px] bg-white"></div>
        <div class="absolute top-px left-0 right-0 px-4">
            <div class="h-[300px] bg-black rounded-2xl p-4 flex flex-col justify-around">
                <div class="text-[32px] text-white font-itgb leading-tight">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
                <div class="relative">
                    <input
                        v-model="emailValue"
                        type="text"
                        placeholder="Enter your email address"
                        class="h-11 w-full bg-white text-[14px] font-stv rounded-full pl-14 pr-10 focus:outline-none placeholder:text-blk-op-40 placeholder:text-[14px] placeholder:font-stv"
                        v-on:keyup.enter="submitted()"
                    />
                    <div class="absolute left-4 top-2.5"><Icon name="ri:mail-add-line" style="color: var(--color-blk-op-40)" size="24px" /></div>
                </div>
                <button type="button" class="bg-white h-11 rounded-full text-[14px] font-stv font-medium cursor-pointer" v-on:click="submitted()">Subscribe to Newsletter</button>
            </div>
        </div>
        <div class="bg-search-grey px-4 pt-44 flex flex-col">
            <div class="text-[28px] text-black font-itgb">SHOP.CO</div>
            <div class="text-[14px] font-stv text-blk-op-60 my-2">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
            <div class="my-2 flex gap-4">
                <button type="button" class="btn" @click="debugClicked('closed!!')"><Icon name="ri:twitter-fill" style="color: black" size="32px" /></button>
                <button type="button" class="btn" @click="debugClicked('closed!!')"><Icon name="ri:facebook-circle-fill" style="color: black" size="32px" /></button>
                <button type="button" class="btn" @click="debugClicked('closed!!')"><Icon name="ri:instagram-fill" style="color: black" size="32px" /></button>
                <button type="button" class="btn" @click="debugClicked('closed!!')"><Icon name="ri:github-fill" style="color: black" size="32px" /></button>
            </div>
            <div class="flex justify-between my-2">
                <div class="flex flex-col">
                    <div class="footer-title">COMPANY</div>
                    <div class="footer-link"><NuxtLink to="/">About</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Features</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Works</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Career</NuxtLink></div>
                    <div class="footer-title">FAQ</div>
                    <div class="footer-link"><NuxtLink to="/">Account</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Manage Deliveries</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Orders</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Payment</NuxtLink></div>
                </div>
                <div class="flex flex-col">
                    <div class="footer-title">HELP</div>
                    <div class="footer-link"><NuxtLink to="/">Customer Support</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Delivery Details</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Terms & Conditions</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Privacy Policy</NuxtLink></div>
                    <div class="footer-title">RESOURCE</div>
                    <div class="footer-link"><NuxtLink to="/">Free eBook</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Development Tutorial</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">How to - Blog</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Youtube Playlist</NuxtLink></div>
                </div>
            </div>
            <div class="my-6"><HorizontalRule /></div>
            <div class="text-[14px] font-stv text-blk-op-60 text-center">Shop.co © 2000-2023, All Rights Reserved</div>
            <div class="flex justify-center items-center gap-x mt-4 mb-12">
                <NuxtImg src="/images/payments/visa.png" height="48" />
                <NuxtImg src="/images/payments/maset.png" height="48" />
                <NuxtImg src="/images/payments/payp.png" height="48" />
                <NuxtImg src="/images/payments/apple.png" height="48" />
                <NuxtImg src="/images/payments/gplay.png" height="48" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-title {
    font-size: 14px;
    font-family: var(--font-stv);
    margin-top: 16px;
    letter-spacing: 3px;
}

.footer-link {
    cursor: pointer;
    font-size: 14px;
    font-family: var(--font-stv);
    color: var(--color-blk-op-60);
    margin-top: 8px;
    margin-bottom: 8px;
}

.btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
