//import { NuxtLink } from "~~/.nuxt/components"
import "./indexPage.sass"
import dd from "./img/manager-person-one.png"
export default defineComponent({
    setup(props, ctx) {
        return () => {
            return (
                <div class="index">
                    <h1>Index Page</h1>
                    <img src={dd} alt="" />
                    <router-link to="second">Second</router-link>
                </div>
            )
        }
    },
})