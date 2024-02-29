import { REST, Routes } from "discord.js";
import { CommandsData } from "./commands";

type DeployCommandProps = {
    clientId: string
}

export async function deployCommands(
    {clientId}: DeployCommandProps
) {
    try {
        const rest = new REST({
            version: '10',
        }).setToken(process.env.CLIENT_TOKEN as string);

        await rest.put(Routes.applicationCommands(clientId), {
            body: CommandsData
        }).then(() => {
            CommandsData.forEach(async val => {
                console.log(`[+] /${val.name} (${val.description})`)
            });
        })
    } catch(err) {
        console.error(err);
    }
}