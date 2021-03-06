import dotenv from "dotenv";
import path from 'path';

if (process.env.NODE_ENV !== "production") {
    const parseEnvFile = dotenv.config({
        path: path.join(__dirname, '../', '.env'),
    });

    if (parseEnvFile.error) {
        throw parseEnvFile.error;
    }
}

const appConfig = {
    asset: path => {
        if (path[0] === "/") return `${path}`;
        return `/${path}`;
    },
    appName: process.env.APP_NAME,
    nodeEnv: process.env.NODE_ENV,
    appDebug: process.env.APP_DEBUG == 'true',
    appURL: process.env.APP_URL,
    appPort: process.env.PORT || process.env.APP_PORT || 3000,
    appLocale: process.env.APP_LOCALE,
    testing: process.env.TESTING == 'true',
};

export default appConfig;
