//import { NuxtLink } from "~~/.nuxt/components"
import "./indexPage.sass"
export default defineComponent({
    setup(props, ctx) {
        return () => {
            return (
                <div class="index">
                    <h1>Index Page</h1>
                    <router-link to="second">Second</router-link>
                </div>
            )
        }
    },
})