import { GuildNavigationMentions, SlashCommandBuilder } from "discord.js";
import { type CommandType } from "../types/command";

import TimeAgo from 'javascript-time-ago'

// * tr
import tr from 'javascript-time-ago/locale/tr'

TimeAgo.addDefaultLocale(tr)

const timeAgo = new TimeAgo('tr-TR')

export const ServerCommand: CommandType = {
    async execute(interaction) {
        await interaction.deferReply();

        const guild = await interaction.guild?.fetch();
        const date = timeAgo.format(guild?.createdAt!);

        return await interaction.editReply({
            content: 
            `Nyaa~! 🌸 Merhaba **${interaction.user.displayName}-san!** Benim adım **egely** desu~! (*≧ω≦) Bu kawaii Discord sunucusu hakkında sizinle biraz bilgi paylaşmak istiyorum nya~!\n\n**Sunucu Adı:** ${guild?.name} 🌈✨\n**Sunucu Sahibi:** <@${(await guild?.fetchOwner())?.id}> 👑💖\n**Sunucu Oluşturulma Tarihi:** ${date} 📅🌸\n**Toplam Üye Sayısı:** ${guild?.memberCount}👥💕\n**Toplam Destekçi Sayısı:** ${guild?.premiumSubscriptionCount} 💜🟪`
        })
    }, 

    data: new SlashCommandBuilder()
	.setName('sunucu')
	.setDescription('Sunucu bilgilerini görüntüler')
}

export default ServerCommand;