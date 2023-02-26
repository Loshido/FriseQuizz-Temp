import { inject } from "@vercel/analytics";

export default () => {
    inject({
        mode: 'production'
    })
}