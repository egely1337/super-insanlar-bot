import { GuildNavigationMentions, SlashCommandBuilder } from "discord.js";
import { type CommandType } from "../types/command";

import TimeAgo from 'javascript-time-ago'
import getRandomObject from "../util/getRandomObject";

  

const rahatlaticiCumleler: string[] = [
    "🍵 Zor bir gün geçirdiğinde, bir fincan sıcak çay içmek seni hemen yatıştırabilir! Sıcak içeceklerin huzur veren etkisi, sanki bir anime sahnesinden fırlamış gibi hissettirebilir~ uwu",
    
    "🌳 Doğanın kucaklayıcı atmosferindeki bir parkta yürüyüş yapmak, kötü hissettiğinde kaçış sağlayabilir! Taze hava, kuş şarkıları ve yeşillikler arasında dolaşmak, sanki bir anime karakterinin içsel huzurunu yaşamak gibidir uwu",
    
    "📖 Sevdiğin bir manga veya anime serisini izlemek, kötü hissettiğinde seni farklı bir dünyaya taşıyabilir! Karakterlerle bağ kurmak ve hikayeye dalış, gerçek dünyadan uzaklaşmanı sağlayabilir uwu",
    
    "🧘‍♂️ Meditasyon ve derin nefes almak, zihinsel dengeyi geri kazanmanda yardımcı olabilir! Gözlerini kapat ve içsel dünyana dal, sanki bir anime karakteri gibi dinginliği bulabilirsin uwu",
    
    "💬 Sevdiğin anime dostlarına açılmak, kötü hissettiğinde duygusal destek almanı sağlayabilir! Duygularını paylaşmak, sanki bir arkadaşlık geliştirme sahnesi gibi içsel bir rahatlama sağlayabilir uwu"
  ];
  

export const IFeelBadCommand: CommandType = {
    async execute(interaction) {
        await interaction.deferReply();

        return await interaction.editReply({
            content: `${getRandomObject(rahatlaticiCumleler)}`
        })
    }, 

    data: new SlashCommandBuilder()
	.setName('kotuhissediyorum')
	.setDescription('Kötü hissettiğin zaman, sana güzel şeyler söyler.')
}

export default IFeelBadCommand;