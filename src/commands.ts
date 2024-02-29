import { CommandInteraction } from "discord.js";
import { type CommandType } from "./types/command";

// * commands
import RemoveAllInvitesCommand from "./commands/removeAllInvites";
import ServerCommand from "./commands/server";
// * end

type RunCommandProps = {
    commandName: string,
    interaction: CommandInteraction
}

export const Commands: CommandType[] = [
    RemoveAllInvitesCommand, ServerCommand
];

export const CommandsData = Object.values(Commands).map((val) => val.data.toJSON());

export async function runCommand(
    {commandName, interaction}: RunCommandProps
) {
    Commands.forEach((val) => {
        if(val.data.name == commandName) {
            val.execute(interaction);
        }
    })
}