<script setup lang="ts">
const emailValue = useState<string>(uuidv4(), () => "");
function submitted() {
    debugClicked(emailValue.value);
}
</script>

<template>
    <div class="relative">
        <div class="h-[90px] bg-white"></div>
        <div class="absolute top-px left-0 right-0 px-[120px]">
            <div class="h-[180px] bg-black rounded-2xl p-8 flex items-center">
                <div class="text-[40px] text-white font-itgb leading-tight flex-1">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
                <div class="w-10"></div>
                <div class="flex flex-col w-[400px] h-full justify-between">
                    <div class="relative">
                        <input
                            v-model="emailValue"
                            type="text"
                            placeholder="Enter your email address"
                            class="h-12 w-full bg-white text-[16px] font-stv rounded-full pl-14 pr-10 focus:outline-none placeholder:text-blk-op-40 placeholder:text-[16px] placeholder:font-stv"
                            v-on:keyup.enter="submitted()"
                        />
                        <div class="absolute left-5 top-3"><Icon name="ri:mail-add-line" style="color: var(--color-blk-op-40)" size="24px" /></div>
                    </div>
                    <button type="button" class="bg-white h-12 rounded-full text-[16px] font-stv font-medium cursor-pointer" v-on:click="submitted()">Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
        <div class="px-[120px] bg-search-grey pt-32 flex flex-col">
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <div>s</div>
                    <div>w</div>
                </div>
                <div class="flex flex-col">
                    <div class="footer-title">COMPANY</div>
                    <div class="footer-link"><NuxtLink to="/">About</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Features</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Works</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Career</NuxtLink></div>
                </div>
                <div class="flex flex-col">
                    <div class="footer-title">HELP</div>
                    <div class="footer-link"><NuxtLink to="/">Customer Support</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Delivery Details</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Terms & Conditions</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Privacy Policy</NuxtLink></div>
                </div>
                <div class="flex flex-col">
                    <div class="footer-title">FAQ</div>
                    <div class="footer-link"><NuxtLink to="/">Account</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Manage Deliveries</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Orders</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Payment</NuxtLink></div>
                </div>
                <div class="flex flex-col">
                    <div class="footer-title">RESOURCE</div>
                    <div class="footer-link"><NuxtLink to="/">Free eBook</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Development Tutorial</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">How to - Blog</NuxtLink></div>
                    <div class="footer-link"><NuxtLink to="/">Youtube Playlist</NuxtLink></div>
                </div>
            </div>
            <div class="my-6"><HorizontalRule /></div>
            <div class="flex gap-x">
                <div class="flex-1 text-[14px] font-stv text-blk-op-60">Shop.co © 2000-2023, All Rights Reserved</div>
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
