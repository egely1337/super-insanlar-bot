import { CommandInteraction } from "discord.js";
import { type CommandType } from "./types/command";

// * commands
import RemoveAllInvitesCommand from "./commands/removeAllInvites";
import ServerCommand from "./commands/server";
import IFeelBadCommand from "./commands/ifeelbad";
// * end

type RunCommandProps = {
    commandName: string,
    interaction: CommandInteraction
}

export const Commands: CommandType[] = [
    RemoveAllInvitesCommand, ServerCommand, IFeelBadCommand
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