// loadEnv.js
import fs from 'fs';

export const setEnv = (env = "DEV") => {
    if (fs.existsSync(`./env/.env.${env}`)) {

        const data = fs.readFileSync(`./env/.env.${env}`).toString();
        fs.writeFileSync(`./.env.local`, data);
    } else {
        console.error(`.env.${env} Not Found!`);
    }
}
