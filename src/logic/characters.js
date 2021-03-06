const LETTERS = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ',
'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な',
'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り',
'る', 'れ', 'ろ', 'わ', 'を']

const LETTERS2 = [
 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ',
 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ',
 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ',
 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ',
 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ',
 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ',
 'ロ', 'ワ', 'ヲ'
]

const ROMA = ['A', 'I', 'U', 'E', 'O', 'KA', 'KI', 'KU', 'KE', 'KO',
'SA', 'SHI', 'SU', 'SE', 'SO', 'TA', 'CHI', 'TSU', 'TE', 'TO', 'NA',
'NI', 'NU', 'NE', 'NO', 'HA', 'HI', 'FU', 'HE', 'HO', 'MA', 'MI',
'MU', 'ME', 'MO', 'YA', 'YU', 'YO', 'RA', 'RI', 'RU', 'RE', 'RO', 'WA', 'WO'];

const characters = {
  HIRAGANA: LETTERS,
  KATAKANA: LETTERS2,
  SIZE: LETTERS.length,
  ROMA: ROMA
}

export default characters;
