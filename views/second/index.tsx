//import { NuxtLink } from "~~/.nuxt/components"
import "./secondPage.sass"
export default defineComponent({
    setup(props, ctx) {
        return () => {
            return (
                <div class="second">
                    <h1>second Page</h1>
                    <router-link to="/">index</router-link>
                </div>
            )
        }
    },
})