import { Guild, GuildMember, SlashCommandBuilder } from "discord.js";
import { type CommandType } from "../types/command";
import { PermissionsBitField } from "discord.js";


export const RemoveAllInvitesCommand: CommandType = {
    async execute(interaction) {

        await interaction.deferReply();

        const member = interaction.member as GuildMember;
        if(member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {
            const guild = interaction.guild as Guild;
            let deleted = 0;

            (await guild.invites.fetch()).map(async invite => {
                await invite.delete().then(() => {deleted = deleted + 1});
            });

            await interaction.editReply({
                content: `**yaklaşık ${deleted} davet silindi 🍫**`
            }).then(async (resp) => {
                setTimeout(async () => {
                    await resp.delete();
                }, 10000);
            })
        } else {
            await interaction.editReply("Yeterli yetkiye sahip değilsin.");
            setTimeout(async () => {
                await interaction.deleteReply();
            }, 10000);
        }
    },

    data: new SlashCommandBuilder()
	.setName('davetlerisil')
	.setDescription('Tüm davetleri ortadan yok eder.')
}

export default RemoveAllInvitesCommand;