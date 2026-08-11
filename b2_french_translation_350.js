// B2 French-Japanese translation practice dataset
// Total: 350 questions
const B2_DATASET = {
  "dataset": "French-Japanese Translation Practice B2",
  "level": "B2",
  "total": 350,
  "categories": {
    "関係代名詞": 40,
    "条件法": 40,
    "接続法": 40,
    "時制の一致": 30,
    "受動態": 30,
    "代名詞 en / y": 30,
    "慣用表現": 40,
    "複合的な文章": 100
  },
  "questions": [
    {
      "id": 1,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le rapport que tu m'as envoyé hier contient plusieurs données qu'il faudrait vérifier.",
      "japanese": "君が昨日送ってくれた報告書には、確認したほうがよいデータがいくつか含まれている。",
      "points": [
        "que は直接目的語を受ける関係代名詞",
        "il faudrait + 不定詞 = ～したほうがよい"
      ]
    },
    {
      "id": 2,
      "level": "B2",
      "category": "関係代名詞",
      "french": "La collègue qui s'occupe de ce dossier sera absente toute la semaine prochaine.",
      "japanese": "この案件を担当している同僚は、来週いっぱい不在になる。",
      "points": [
        "qui は関係節の主語になる"
      ]
    },
    {
      "id": 3,
      "level": "B2",
      "category": "関係代名詞",
      "french": "C'est une décision dont les conséquences pourraient se faire sentir pendant plusieurs années.",
      "japanese": "これは、その影響が数年にわたって感じられる可能性のある決定だ。",
      "points": [
        "dont は de を伴う関係を表す",
        "se faire sentir = 影響などが感じられる"
      ]
    },
    {
      "id": 4,
      "level": "B2",
      "category": "関係代名詞",
      "french": "La ville où j'ai passé mon enfance a beaucoup changé depuis que je l'ai quittée.",
      "japanese": "私が子ども時代を過ごした町は、離れて以来大きく変わった。",
      "points": [
        "où は場所・時を受ける関係代名詞",
        "depuis que + 直説法"
      ]
    },
    {
      "id": 5,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Voilà la raison pour laquelle nous avons préféré reporter la réunion.",
      "japanese": "これが、私たちが会議を延期することにした理由だ。",
      "points": [
        "pour laquelle = pour + lequel",
        "préférer + 不定詞"
      ]
    },
    {
      "id": 6,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le projet auquel elle consacre la majeure partie de son temps devrait aboutir en septembre.",
      "japanese": "彼女が時間の大半を費やしているプロジェクトは、9月に完了する見込みだ。",
      "points": [
        "auquel = à + lequel",
        "consacrer du temps à"
      ]
    },
    {
      "id": 7,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Les circonstances dans lesquelles l'accident s'est produit restent encore difficiles à établir.",
      "japanese": "事故が起きた状況は、今もなお明らかにするのが難しい。",
      "points": [
        "dans lesquelles = dans + lequel",
        "se produire = 起こる"
      ]
    },
    {
      "id": 8,
      "level": "B2",
      "category": "関係代名詞",
      "french": "L'entreprise pour laquelle il travaille vient d'annoncer une importante réorganisation.",
      "japanese": "彼が勤めている会社は、大規模な組織再編を発表したばかりだ。",
      "points": [
        "pour laquelle = ～のために",
        "venir de + 不定詞 = ～したばかり"
      ]
    },
    {
      "id": 9,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Ce qui me surprend le plus, c'est qu'il n'ait demandé l'avis de personne.",
      "japanese": "私が最も驚いているのは、彼が誰にも意見を求めなかったことだ。",
      "points": [
        "ce qui は先行詞なしで主語になる",
        "c'est que ... の強調構文"
      ]
    },
    {
      "id": 10,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Je comprends ce que tu veux dire, mais je ne suis pas certain d'être d'accord.",
      "japanese": "君の言いたいことは分かるが、賛成できるかは分からない。",
      "points": [
        "ce que は先行詞なしで目的語になる"
      ]
    },
    {
      "id": 11,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Ce dont nous avons besoin maintenant, c'est d'un calendrier réaliste.",
      "japanese": "今私たちに必要なのは、現実的なスケジュールだ。",
      "points": [
        "ce dont = ～するもの／こと",
        "avoir besoin de"
      ]
    },
    {
      "id": 12,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Il n'a pas expliqué ce à quoi il faisait référence dans son message.",
      "japanese": "彼はメッセージの中で何を指していたのか説明しなかった。",
      "points": [
        "ce à quoi は物事を受ける",
        "faire référence à"
      ]
    },
    {
      "id": 13,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le chercheur avec lequel j'ai discuté m'a conseillé de revoir cette hypothèse.",
      "japanese": "私が話をした研究者は、この仮説を見直すよう助言してくれた。",
      "points": [
        "avec lequel = avec + lequel",
        "conseiller de + 不定詞"
      ]
    },
    {
      "id": 14,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Les critères selon lesquels les candidatures seront évaluées ont été publiés hier.",
      "japanese": "応募書類を評価する基準は昨日公表された。",
      "points": [
        "selon lesquels = ～に従って",
        "受動態 seront évaluées"
      ]
    },
    {
      "id": 15,
      "level": "B2",
      "category": "関係代名詞",
      "french": "C'est un problème auquel personne ne semble avoir trouvé de solution satisfaisante.",
      "japanese": "これは、誰も満足のいく解決策を見つけられていないように見える問題だ。",
      "points": [
        "trouver une solution à",
        "sembler avoir + 過去分詞"
      ]
    },
    {
      "id": 16,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le quartier au centre duquel se trouve la gare est particulièrement animé le soir.",
      "japanese": "駅が中心に位置するその地区は、夜になると特ににぎやかだ。",
      "points": [
        "au centre duquel = ～の中心に",
        "倒置 se trouve la gare"
      ]
    },
    {
      "id": 17,
      "level": "B2",
      "category": "関係代名詞",
      "french": "La proposition contre laquelle plusieurs membres se sont prononcés a finalement été retirée.",
      "japanese": "複数のメンバーが反対を表明した提案は、最終的に撤回された。",
      "points": [
        "se prononcer contre = ～に反対を表明する",
        "contre laquelle"
      ]
    },
    {
      "id": 18,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Les objectifs vers lesquels nous devons tendre ne peuvent être atteints du jour au lendemain.",
      "japanese": "私たちが目指すべき目標は、一朝一夕には達成できない。",
      "points": [
        "tendre vers = ～を目指す",
        "du jour au lendemain = 一朝一夕に"
      ]
    },
    {
      "id": 19,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le moment où il faudra prendre une décision approche plus vite que prévu.",
      "japanese": "決断を下さなければならない時が、予想より早く近づいている。",
      "points": [
        "où は時を表す先行詞にも使える",
        "plus vite que prévu"
      ]
    },
    {
      "id": 20,
      "level": "B2",
      "category": "関係代名詞",
      "french": "L'explication qu'elle a donnée était plus convaincante que celle que nous avions entendue auparavant.",
      "japanese": "彼女の説明は、以前聞いたものより説得力があった。",
      "points": [
        "que は目的語",
        "celle que = 女性名詞の代名詞 + 関係節"
      ]
    },
    {
      "id": 21,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Les personnes dont les noms figurent sur cette liste recevront une invitation officielle.",
      "japanese": "このリストに名前が載っている人々には正式な招待状が届く。",
      "points": [
        "dont + 名詞 = ～の…",
        "figurer sur une liste"
      ]
    },
    {
      "id": 22,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le musée que nous voulions visiter était fermé pour travaux.",
      "japanese": "私たちが訪れたかった美術館は改修工事のため閉館していた。",
      "points": [
        "que + 主語 + 動詞",
        "être fermé pour travaux"
      ]
    },
    {
      "id": 23,
      "level": "B2",
      "category": "関係代名詞",
      "french": "L'étudiante qui a posé cette question semble avoir très bien compris le problème.",
      "japanese": "その質問をした学生は、問題をよく理解しているようだ。",
      "points": [
        "qui が関係節の主語",
        "sembler avoir compris"
      ]
    },
    {
      "id": 24,
      "level": "B2",
      "category": "関係代名詞",
      "french": "C'est précisément le genre de situation que je cherchais à éviter.",
      "japanese": "まさに、私が避けようとしていた類いの状況だ。",
      "points": [
        "chercher à + 不定詞",
        "que が éviter の目的語"
      ]
    },
    {
      "id": 25,
      "level": "B2",
      "category": "関係代名詞",
      "french": "La méthode dont il se sert permet d'obtenir des résultats plus précis.",
      "japanese": "彼が使っている方法を用いると、より正確な結果が得られる。",
      "points": [
        "se servir de = ～を使う",
        "dont が de を受ける"
      ]
    },
    {
      "id": 26,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le café où nous avions rendez-vous se trouvait juste en face de la bibliothèque.",
      "japanese": "私たちが待ち合わせをしていたカフェは、図書館の真向かいにあった。",
      "points": [
        "avoir rendez-vous",
        "où = 場所"
      ]
    },
    {
      "id": 27,
      "level": "B2",
      "category": "関係代名詞",
      "french": "La question à laquelle il a refusé de répondre concernait le financement du projet.",
      "japanese": "彼が回答を拒んだ質問は、プロジェクトの資金調達に関するものだった。",
      "points": [
        "répondre à une question",
        "à laquelle"
      ]
    },
    {
      "id": 28,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le document sur lequel repose toute l'argumentation n'est plus accessible en ligne.",
      "japanese": "議論全体の根拠となっている文書は、もうオンラインでは閲覧できない。",
      "points": [
        "reposer sur = ～に基づく",
        "sur lequel"
      ]
    },
    {
      "id": 29,
      "level": "B2",
      "category": "関係代名詞",
      "french": "L'accord grâce auquel le projet a pu être financé a été signé l'année dernière.",
      "japanese": "そのプロジェクトの資金調達を可能にした協定は、昨年署名された。",
      "points": [
        "grâce auquel = ～のおかげで",
        "pouvoir être financé"
      ]
    },
    {
      "id": 30,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Les difficultés auxquelles nous sommes confrontés ne sont pas uniquement d'ordre financier.",
      "japanese": "私たちが直面している困難は、金銭的なものだけではない。",
      "points": [
        "être confronté à",
        "auxquelles = à + lesquelles"
      ]
    },
    {
      "id": 31,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Ceux qui souhaitent participer doivent s'inscrire avant vendredi.",
      "japanese": "参加を希望する人は金曜日までに登録しなければならない。",
      "points": [
        "ceux qui = ～する人々",
        "souhaiter + 不定詞"
      ]
    },
    {
      "id": 32,
      "level": "B2",
      "category": "関係代名詞",
      "french": "J'ai relu les notes que j'avais prises pendant la conférence.",
      "japanese": "私は講演中に取ったメモを読み返した。",
      "points": [
        "plus-que-parfait avais prises",
        "過去分詞 prises は先行する直接目的語 notes に一致"
      ]
    },
    {
      "id": 33,
      "level": "B2",
      "category": "関係代名詞",
      "french": "La personne à qui tu as parlé est responsable de l'ensemble du programme.",
      "japanese": "君が話した人はプログラム全体の責任者だ。",
      "points": [
        "人を受ける à qui",
        "parler à quelqu'un"
      ]
    },
    {
      "id": 34,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Voici le laboratoire dans lequel les premières expériences ont été réalisées.",
      "japanese": "ここが最初の実験が行われた研究室だ。",
      "points": [
        "dans lequel = その中で",
        "受動態 ont été réalisées"
      ]
    },
    {
      "id": 35,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Il existe plusieurs solutions, parmi lesquelles celle-ci me paraît la plus réaliste.",
      "japanese": "いくつか解決策があるが、その中ではこれが最も現実的に思える。",
      "points": [
        "parmi lesquelles = その中で",
        "celle-ci"
      ]
    },
    {
      "id": 36,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le délai au-delà duquel aucune modification ne sera acceptée est fixé au 15 octobre.",
      "japanese": "それを過ぎると変更が一切受け付けられない期限は10月15日に設定されている。",
      "points": [
        "au-delà duquel = ～を越えて",
        "aucune ... ne"
      ]
    },
    {
      "id": 37,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Les raisons pour lesquelles elle a démissionné restent en partie inconnues.",
      "japanese": "彼女が辞職した理由は、一部いまだ不明だ。",
      "points": [
        "les raisons pour lesquelles",
        "rester inconnu"
      ]
    },
    {
      "id": 38,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Ce à quoi je tiens surtout, c'est que chacun puisse exprimer son point de vue.",
      "japanese": "私が何より大切にしているのは、誰もが自分の意見を述べられることだ。",
      "points": [
        "tenir à = ～を大切にする",
        "ce à quoi"
      ]
    },
    {
      "id": 39,
      "level": "B2",
      "category": "関係代名詞",
      "french": "L'époque où l'on pouvait travailler sans connexion permanente à Internet paraît déjà lointaine.",
      "japanese": "常時インターネット接続なしで働けた時代は、すでに遠い昔のように感じられる。",
      "points": [
        "où = 時",
        "on pouvait + 不定詞"
      ]
    },
    {
      "id": 40,
      "level": "B2",
      "category": "関係代名詞",
      "french": "Le principe selon lequel chacun doit être traité de la même manière est au cœur de cette réforme.",
      "japanese": "誰もが同じように扱われるべきだという原則が、この改革の中心にある。",
      "points": [
        "selon lequel = ～という原則に従って",
        "être traité"
      ]
    },
    {
      "id": 41,
      "level": "B2",
      "category": "条件法",
      "french": "Si j'avais davantage de temps, je suivrais volontiers cette formation.",
      "japanese": "もっと時間があれば、ぜひこの研修を受けるのだが。",
      "points": [
        "si + imparfait → conditionnel présent",
        "volontiers = 喜んで"
      ]
    },
    {
      "id": 42,
      "level": "B2",
      "category": "条件法",
      "french": "Si nous avions réservé plus tôt, nous aurions payé beaucoup moins cher.",
      "japanese": "もっと早く予約していれば、ずっと安く済んだだろう。",
      "points": [
        "si + plus-que-parfait → conditionnel passé"
      ]
    },
    {
      "id": 43,
      "level": "B2",
      "category": "条件法",
      "french": "À ta place, je demanderais un deuxième avis avant de prendre une décision.",
      "japanese": "私が君の立場なら、決断する前に別の意見も聞くだろう。",
      "points": [
        "conditionnel présent で助言",
        "à ta place = 君の立場なら"
      ]
    },
    {
      "id": 44,
      "level": "B2",
      "category": "条件法",
      "french": "Pourriez-vous me préciser à quelle heure la réunion commencera ?",
      "japanese": "会議が何時に始まるのか教えていただけますか。",
      "points": [
        "conditionnel で丁寧な依頼",
        "pourriez-vous + 不定詞"
      ]
    },
    {
      "id": 45,
      "level": "B2",
      "category": "条件法",
      "french": "J'aimerais savoir s'il serait possible de modifier ma réservation.",
      "japanese": "予約を変更することが可能か知りたいのですが。",
      "points": [
        "j'aimerais = 丁寧な希望",
        "serait possible = 控えめな表現"
      ]
    },
    {
      "id": 46,
      "level": "B2",
      "category": "条件法",
      "french": "D'après plusieurs témoins, l'incendie aurait commencé peu après minuit.",
      "japanese": "複数の目撃者によると、火災は午前0時すぎに始まったとみられる。",
      "points": [
        "conditionnel passé で未確認情報",
        "d'après = ～によると"
      ]
    },
    {
      "id": 47,
      "level": "B2",
      "category": "条件法",
      "french": "Le gouvernement envisagerait de présenter un nouveau projet de loi à l'automne.",
      "japanese": "政府は秋に新たな法案を提出することを検討しているとされる。",
      "points": [
        "conditionnel présent で報道上の未確認情報"
      ]
    },
    {
      "id": 48,
      "level": "B2",
      "category": "条件法",
      "french": "Elle m'a dit qu'elle viendrait dès qu'elle aurait terminé son travail.",
      "japanese": "彼女は、仕事が終わり次第来ると言った。",
      "points": [
        "過去から見た未来に conditionnel",
        "dès que + futur antérieur 相当の時制関係"
      ]
    },
    {
      "id": 49,
      "level": "B2",
      "category": "条件法",
      "french": "Je pensais que la situation s'améliorerait plus rapidement.",
      "japanese": "状況はもっと早く改善すると思っていた。",
      "points": [
        "過去から見た未来 = conditionnel présent"
      ]
    },
    {
      "id": 50,
      "level": "B2",
      "category": "条件法",
      "french": "Il aurait accepté l'offre si les conditions avaient été plus avantageuses.",
      "japanese": "条件がもっと有利だったなら、彼はその申し出を受け入れていただろう。",
      "points": [
        "conditionnel passé + si plus-que-parfait"
      ]
    },
    {
      "id": 51,
      "level": "B2",
      "category": "条件法",
      "french": "Sans ton aide, nous n'aurions jamais terminé à temps.",
      "japanese": "君の助けがなければ、私たちは時間内に終えられなかっただろう。",
      "points": [
        "sans + 名詞で仮定",
        "conditionnel passé"
      ]
    },
    {
      "id": 52,
      "level": "B2",
      "category": "条件法",
      "french": "Avec un budget plus important, l'équipe pourrait mener une étude plus ambitieuse.",
      "japanese": "もっと大きな予算があれば、チームはより大規模な研究を実施できるだろう。",
      "points": [
        "conditionnel présent で仮定の結果",
        "mener une étude"
      ]
    },
    {
      "id": 53,
      "level": "B2",
      "category": "条件法",
      "french": "Même avec davantage d'explications, je ne serais pas certain de comprendre son raisonnement.",
      "japanese": "もっと説明があったとしても、彼の論理を理解できる自信はないだろう。",
      "points": [
        "conditionnel présent",
        "même avec = ～があっても"
      ]
    },
    {
      "id": 54,
      "level": "B2",
      "category": "条件法",
      "french": "Si tu devais choisir entre les deux options, laquelle retiendrais-tu ?",
      "japanese": "もし2つの選択肢から選ばなければならないとしたら、どちらを選ぶ？",
      "points": [
        "si + imparfait",
        "conditionnel présent"
      ]
    },
    {
      "id": 55,
      "level": "B2",
      "category": "条件法",
      "french": "Que feriez-vous si vous vous retrouviez dans la même situation ?",
      "japanese": "同じ状況に置かれたら、あなたならどうしますか。",
      "points": [
        "仮定条件",
        "se retrouver dans une situation"
      ]
    },
    {
      "id": 56,
      "level": "B2",
      "category": "条件法",
      "french": "Si j'avais su qu'il y aurait autant de monde, je serais venu plus tôt.",
      "japanese": "こんなに人が多いと分かっていたら、もっと早く来ていただろう。",
      "points": [
        "si + plus-que-parfait",
        "conditionnel passé"
      ]
    },
    {
      "id": 57,
      "level": "B2",
      "category": "条件法",
      "french": "Nous aurions pu éviter ce malentendu en communiquant plus clairement dès le début.",
      "japanese": "最初からもっと明確に意思疎通していれば、この誤解は避けられたはずだ。",
      "points": [
        "aurions pu + 不定詞",
        "過去の反実仮想"
      ]
    },
    {
      "id": 58,
      "level": "B2",
      "category": "条件法",
      "french": "Tu aurais dû me prévenir que le délai avait été raccourci.",
      "japanese": "期限が短縮されたことを知らせてくれるべきだった。",
      "points": [
        "aurais dû + 不定詞 = ～すべきだった"
      ]
    },
    {
      "id": 59,
      "level": "B2",
      "category": "条件法",
      "french": "Il vaudrait mieux attendre les résultats définitifs avant de tirer des conclusions.",
      "japanese": "結論を出す前に最終結果を待ったほうがよいだろう。",
      "points": [
        "il vaudrait mieux + 不定詞 = ～したほうがよい"
      ]
    },
    {
      "id": 60,
      "level": "B2",
      "category": "条件法",
      "french": "Je serais reconnaissant si vous pouviez m'envoyer le document avant demain.",
      "japanese": "明日までにその書類を送っていただけるとありがたいです。",
      "points": [
        "conditionnel で丁寧さを出す",
        "si + imparfait"
      ]
    },
    {
      "id": 61,
      "level": "B2",
      "category": "条件法",
      "french": "Cette mesure pourrait avoir des conséquences plus importantes qu'on ne le pense.",
      "japanese": "この措置は、考えられている以上に大きな影響を及ぼす可能性がある。",
      "points": [
        "pourrait = 可能性・控えめな推量",
        "avoir des conséquences"
      ]
    },
    {
      "id": 62,
      "level": "B2",
      "category": "条件法",
      "french": "On aurait tendance à croire que le problème est simple, alors qu'il ne l'est pas.",
      "japanese": "問題は単純だと思いがちだが、実際にはそうではない。",
      "points": [
        "avoir tendance à",
        "conditionnel で一般化を和らげる"
      ]
    },
    {
      "id": 63,
      "level": "B2",
      "category": "条件法",
      "french": "Il semblerait que les deux parties soient proches d'un accord.",
      "japanese": "両者は合意に近づいているようだ。",
      "points": [
        "il semblerait que = 控えめな推量",
        "接続法 soient"
      ]
    },
    {
      "id": 64,
      "level": "B2",
      "category": "条件法",
      "french": "La réforme devrait entrer en vigueur au début de l'année prochaine.",
      "japanese": "その改革は来年初めに施行される見込みだ。",
      "points": [
        "devrait = 予測・見込み",
        "entrer en vigueur"
      ]
    },
    {
      "id": 65,
      "level": "B2",
      "category": "条件法",
      "french": "Selon les premières estimations, les coûts seraient supérieurs aux prévisions.",
      "japanese": "初期の見積もりによると、費用は予想を上回るとみられる。",
      "points": [
        "seraient = 未確認・推定",
        "supérieur à"
      ]
    },
    {
      "id": 66,
      "level": "B2",
      "category": "条件法",
      "french": "Si la météo le permettait, nous pourrions organiser la réunion à l'extérieur.",
      "japanese": "天気が許せば、会議を屋外で開くこともできるだろう。",
      "points": [
        "si + imparfait → conditionnel",
        "permettre"
      ]
    },
    {
      "id": 67,
      "level": "B2",
      "category": "条件法",
      "french": "Je ne prendrais pas ce risque à moins d'être absolument certain du résultat.",
      "japanese": "結果に絶対の確信がない限り、私はそのリスクは取らないだろう。",
      "points": [
        "à moins de + 不定詞",
        "conditionnel présent"
      ]
    },
    {
      "id": 68,
      "level": "B2",
      "category": "条件法",
      "french": "Il suffirait de quelques modifications pour rendre le texte beaucoup plus clair.",
      "japanese": "いくつか修正するだけで、その文章はずっと分かりやすくなるだろう。",
      "points": [
        "il suffirait de = ～だけで十分だろう",
        "pour + 不定詞"
      ]
    },
    {
      "id": 69,
      "level": "B2",
      "category": "条件法",
      "french": "Une meilleure coordination permettrait d'éviter une grande partie de ces erreurs.",
      "japanese": "連携を改善すれば、こうしたミスの大部分を防げるだろう。",
      "points": [
        "conditionnel で仮定の効果",
        "permettre de"
      ]
    },
    {
      "id": 70,
      "level": "B2",
      "category": "条件法",
      "french": "En théorie, cette méthode devrait fonctionner dans la plupart des cas.",
      "japanese": "理論上、この方法はほとんどの場合うまくいくはずだ。",
      "points": [
        "devrait = ～のはずだ",
        "en théorie"
      ]
    },
    {
      "id": 71,
      "level": "B2",
      "category": "条件法",
      "french": "Si rien ne changeait, la situation risquerait de devenir difficile à gérer.",
      "japanese": "何も変わらなければ、状況は対処が難しくなるおそれがある。",
      "points": [
        "si + imparfait",
        "risquer de"
      ]
    },
    {
      "id": 72,
      "level": "B2",
      "category": "条件法",
      "french": "Même si on me le proposait, je ne serais pas prêt à déménager à l'étranger.",
      "japanese": "たとえ提案されても、私は海外へ引っ越す覚悟はまだできていないだろう。",
      "points": [
        "même si + imparfait",
        "être prêt à"
      ]
    },
    {
      "id": 73,
      "level": "B2",
      "category": "条件法",
      "french": "À l'époque, personne n'imaginait que cette petite entreprise deviendrait un groupe international.",
      "japanese": "当時、その小さな会社が国際企業になるとは誰も想像していなかった。",
      "points": [
        "過去から見た未来",
        "deviendrait"
      ]
    },
    {
      "id": 74,
      "level": "B2",
      "category": "条件法",
      "french": "Elle espérait que ses recherches permettraient de mieux comprendre le phénomène.",
      "japanese": "彼女は、自分の研究によってその現象をよりよく理解できるようになることを期待していた。",
      "points": [
        "過去から見た未来",
        "permettraient de"
      ]
    },
    {
      "id": 75,
      "level": "B2",
      "category": "条件法",
      "french": "Nous pensions que le train arriverait à l'heure, mais il a finalement eu quarante minutes de retard.",
      "japanese": "列車は時間どおりに着くと思っていたが、結局40分遅れた。",
      "points": [
        "過去から見た未来 = arriverait"
      ]
    },
    {
      "id": 76,
      "level": "B2",
      "category": "条件法",
      "french": "Le candidat aurait menti sur son expérience professionnelle, mais l'information n'a pas été confirmée.",
      "japanese": "その候補者は職歴について虚偽を述べたとされるが、その情報は確認されていない。",
      "points": [
        "conditionnel passé で伝聞・未確認情報"
      ]
    },
    {
      "id": 77,
      "level": "B2",
      "category": "条件法",
      "french": "J'aurais préféré que tu m'en parles avant d'envoyer le message.",
      "japanese": "そのメッセージを送る前に、私に話してほしかった。",
      "points": [
        "j'aurais préféré que + 接続法",
        "過去の希望"
      ]
    },
    {
      "id": 78,
      "level": "B2",
      "category": "条件法",
      "french": "On pourrait se demander si cette solution ne crée pas plus de problèmes qu'elle n'en résout.",
      "japanese": "この解決策は、解決する以上に問題を生み出しているのではないかと考えることもできる。",
      "points": [
        "on pourrait se demander = ～と考えることもできる",
        "ne explétif を含む比較"
      ]
    },
    {
      "id": 79,
      "level": "B2",
      "category": "条件法",
      "french": "Si les résultats se confirmaient, ils remettraient en cause plusieurs hypothèses admises jusqu'ici.",
      "japanese": "もし結果が確認されれば、これまで受け入れられてきた複数の仮説が見直されることになるだろう。",
      "points": [
        "si + imparfait → conditionnel",
        "remettre en cause"
      ]
    },
    {
      "id": 80,
      "level": "B2",
      "category": "条件法",
      "french": "Il aurait été préférable de définir les responsabilités de chacun dès le départ.",
      "japanese": "最初から各人の責任を明確にしておくほうがよかっただろう。",
      "points": [
        "il aurait été préférable de",
        "過去についての評価"
      ]
    },
    {
      "id": 81,
      "level": "B2",
      "category": "接続法",
      "french": "Il faut que nous trouvions une solution avant la fin de la semaine.",
      "japanese": "週末までに解決策を見つける必要がある。",
      "points": [
        "il faut que + 接続法"
      ]
    },
    {
      "id": 82,
      "level": "B2",
      "category": "接続法",
      "french": "Je doute qu'il soit possible de terminer ce travail aujourd'hui.",
      "japanese": "今日中にこの仕事を終えることが可能かどうか疑わしい。",
      "points": [
        "douter que + 接続法"
      ]
    },
    {
      "id": 83,
      "level": "B2",
      "category": "接続法",
      "french": "Bien qu'elle soit très compétente, elle manque encore d'expérience dans ce domaine.",
      "japanese": "彼女は非常に有能だが、この分野ではまだ経験が不足している。",
      "points": [
        "bien que + 接続法"
      ]
    },
    {
      "id": 84,
      "level": "B2",
      "category": "接続法",
      "french": "Pour que le projet réussisse, chacun doit clairement connaître son rôle.",
      "japanese": "プロジェクトを成功させるには、各自が自分の役割を明確に理解していなければならない。",
      "points": [
        "pour que + 接続法"
      ]
    },
    {
      "id": 85,
      "level": "B2",
      "category": "接続法",
      "french": "Avant que tu ne prennes une décision, j'aimerais te montrer un autre document.",
      "japanese": "君が決断する前に、別の資料を見せたい。",
      "points": [
        "avant que + 接続法",
        "ne explétif"
      ]
    },
    {
      "id": 86,
      "level": "B2",
      "category": "接続法",
      "french": "À moins qu'il n'y ait un changement de dernière minute, la réunion aura bien lieu demain.",
      "japanese": "直前の変更がない限り、会議は予定どおり明日行われる。",
      "points": [
        "à moins que + 接続法",
        "ne explétif"
      ]
    },
    {
      "id": 87,
      "level": "B2",
      "category": "接続法",
      "french": "Je suis ravi que vous ayez accepté notre proposition.",
      "japanese": "私たちの提案を受け入れてくださってうれしいです。",
      "points": [
        "感情表現 + que + 接続法",
        "接続法過去 ayez accepté"
      ]
    },
    {
      "id": 88,
      "level": "B2",
      "category": "接続法",
      "french": "Il est possible qu'elle ait oublié de nous prévenir.",
      "japanese": "彼女は私たちに知らせるのを忘れた可能性がある。",
      "points": [
        "il est possible que + 接続法",
        "接続法過去"
      ]
    },
    {
      "id": 89,
      "level": "B2",
      "category": "接続法",
      "french": "Je ne pense pas que cette mesure soit suffisante à long terme.",
      "japanese": "この措置が長期的に十分だとは思わない。",
      "points": [
        "否定の penser que + 接続法"
      ]
    },
    {
      "id": 90,
      "level": "B2",
      "category": "接続法",
      "french": "Quoi qu'il arrive, nous devrons respecter le calendrier prévu.",
      "japanese": "何が起ころうとも、予定されたスケジュールを守らなければならない。",
      "points": [
        "quoi qu'il arrive = 何が起ころうとも"
      ]
    },
    {
      "id": 91,
      "level": "B2",
      "category": "接続法",
      "french": "Il cherche quelqu'un qui puisse travailler de manière autonome.",
      "japanese": "彼は自律的に働ける人を探している。",
      "points": [
        "不特定の先行詞 + qui + 接続法"
      ]
    },
    {
      "id": 92,
      "level": "B2",
      "category": "接続法",
      "french": "C'est le meilleur résultat que nous ayons obtenu jusqu'à présent.",
      "japanese": "これは私たちがこれまでに得た中で最も良い結果だ。",
      "points": [
        "最上級 + que + 接続法"
      ]
    },
    {
      "id": 93,
      "level": "B2",
      "category": "接続法",
      "french": "Je veux que chacun puisse exprimer librement son opinion.",
      "japanese": "誰もが自由に意見を述べられるようにしたい。",
      "points": [
        "vouloir que + 接続法"
      ]
    },
    {
      "id": 94,
      "level": "B2",
      "category": "接続法",
      "french": "Le directeur exige que le rapport soit corrigé avant sa publication.",
      "japanese": "部長は、報告書が公開前に修正されることを求めている。",
      "points": [
        "exiger que + 接続法",
        "接続法の受動態"
      ]
    },
    {
      "id": 95,
      "level": "B2",
      "category": "接続法",
      "french": "Nous préférons que vous nous envoyiez les documents par voie électronique.",
      "japanese": "書類は電子形式で送っていただくほうが望ましいです。",
      "points": [
        "préférer que + 接続法"
      ]
    },
    {
      "id": 96,
      "level": "B2",
      "category": "接続法",
      "french": "Il est essentiel que les données soient vérifiées par une personne indépendante.",
      "japanese": "データが独立した第三者によって検証されることが不可欠だ。",
      "points": [
        "il est essentiel que + 接続法"
      ]
    },
    {
      "id": 97,
      "level": "B2",
      "category": "接続法",
      "french": "Je crains que la situation ne se complique davantage.",
      "japanese": "状況がさらに複雑になるのではないかと心配している。",
      "points": [
        "craindre que + 接続法",
        "ne explétif"
      ]
    },
    {
      "id": 98,
      "level": "B2",
      "category": "接続法",
      "french": "Nous partirons tôt de façon à ce que nous puissions éviter les embouteillages.",
      "japanese": "渋滞を避けられるよう、早く出発する。",
      "points": [
        "de façon à ce que + 接続法"
      ]
    },
    {
      "id": 99,
      "level": "B2",
      "category": "接続法",
      "french": "Elle a fermé la porte sans que personne s'en aperçoive.",
      "japanese": "彼女は誰にも気づかれずにドアを閉めた。",
      "points": [
        "sans que + 接続法",
        "s'apercevoir de"
      ]
    },
    {
      "id": 100,
      "level": "B2",
      "category": "接続法",
      "french": "Où que vous soyez, vous pouvez accéder à votre compte.",
      "japanese": "どこにいても、自分のアカウントにアクセスできる。",
      "points": [
        "où que + 接続法"
      ]
    },
    {
      "id": 101,
      "level": "B2",
      "category": "接続法",
      "french": "Il est regrettable que cette information n'ait pas été communiquée plus tôt.",
      "japanese": "この情報がもっと早く伝えられなかったのは残念だ。",
      "points": [
        "il est regrettable que + 接続法",
        "接続法過去の受動態"
      ]
    },
    {
      "id": 102,
      "level": "B2",
      "category": "接続法",
      "french": "Je comprends que vous soyez déçu par cette décision.",
      "japanese": "この決定に失望していることは理解できます。",
      "points": [
        "comprendre que が感情への理解を表す場合の接続法"
      ]
    },
    {
      "id": 103,
      "level": "B2",
      "category": "接続法",
      "french": "Il n'est pas certain que les résultats puissent être reproduits.",
      "japanese": "その結果を再現できるかどうかは確かではない。",
      "points": [
        "il n'est pas certain que + 接続法"
      ]
    },
    {
      "id": 104,
      "level": "B2",
      "category": "接続法",
      "french": "Nous attendrons jusqu'à ce que tout le monde soit arrivé.",
      "japanese": "全員が到着するまで待つ。",
      "points": [
        "jusqu'à ce que + 接続法"
      ]
    },
    {
      "id": 105,
      "level": "B2",
      "category": "接続法",
      "french": "Il parle lentement afin que tout le monde puisse le comprendre.",
      "japanese": "全員が理解できるように、彼はゆっくり話す。",
      "points": [
        "afin que + 接続法"
      ]
    },
    {
      "id": 106,
      "level": "B2",
      "category": "接続法",
      "french": "Encore faut-il que cette solution soit financièrement viable.",
      "japanese": "ただし、その解決策が経済的に実行可能である必要はある。",
      "points": [
        "encore faut-il que + 接続法"
      ]
    },
    {
      "id": 107,
      "level": "B2",
      "category": "接続法",
      "french": "Pourvu qu'il fasse beau, nous organiserons le dîner dehors.",
      "japanese": "天気さえよければ、夕食は外で行う。",
      "points": [
        "pourvu que + 接続法"
      ]
    },
    {
      "id": 108,
      "level": "B2",
      "category": "接続法",
      "french": "Il a accepté à condition que les frais soient entièrement pris en charge.",
      "japanese": "費用が全額負担されることを条件に、彼は承諾した。",
      "points": [
        "à condition que + 接続法"
      ]
    },
    {
      "id": 109,
      "level": "B2",
      "category": "接続法",
      "french": "Je ne connais personne qui sache résoudre ce problème aussi rapidement.",
      "japanese": "この問題をこれほど早く解ける人を私は誰も知らない。",
      "points": [
        "否定された先行詞 + qui + 接続法"
      ]
    },
    {
      "id": 110,
      "level": "B2",
      "category": "接続法",
      "french": "Quel que soit votre choix, il faudra en assumer les conséquences.",
      "japanese": "どのような選択をしても、その結果を引き受けなければならない。",
      "points": [
        "quel que soit + 名詞"
      ]
    },
    {
      "id": 111,
      "level": "B2",
      "category": "接続法",
      "french": "Il est temps que nous prenions enfin une décision.",
      "japanese": "そろそろ私たちは最終的な決断を下すべきだ。",
      "points": [
        "il est temps que + 接続法"
      ]
    },
    {
      "id": 112,
      "level": "B2",
      "category": "接続法",
      "french": "Je suis surpris qu'il n'ait rien dit pendant la réunion.",
      "japanese": "彼が会議中に何も言わなかったことに驚いている。",
      "points": [
        "être surpris que + 接続法",
        "接続法過去"
      ]
    },
    {
      "id": 113,
      "level": "B2",
      "category": "接続法",
      "french": "Elle insiste pour que nous relisions le contrat avant de le signer.",
      "japanese": "彼女は、契約に署名する前にもう一度読み直すよう強く求めている。",
      "points": [
        "insister pour que + 接続法"
      ]
    },
    {
      "id": 114,
      "level": "B2",
      "category": "接続法",
      "french": "Nous avons modifié le calendrier de peur que plusieurs participants ne soient indisponibles.",
      "japanese": "複数の参加者が都合がつかなくなることを懸念して、日程を変更した。",
      "points": [
        "de peur que + 接続法",
        "ne explétif"
      ]
    },
    {
      "id": 115,
      "level": "B2",
      "category": "接続法",
      "french": "Il suffit que vous remplissiez ce formulaire pour recevoir une confirmation.",
      "japanese": "この用紙に記入するだけで確認通知を受け取れる。",
      "points": [
        "il suffit que + 接続法"
      ]
    },
    {
      "id": 116,
      "level": "B2",
      "category": "接続法",
      "french": "Même s'il est peu probable qu'elle accepte, nous devons lui proposer cette option.",
      "japanese": "彼女が承諾する可能性は低いとしても、この選択肢を提案すべきだ。",
      "points": [
        "il est peu probable que + 接続法"
      ]
    },
    {
      "id": 117,
      "level": "B2",
      "category": "接続法",
      "french": "J'accepterai votre proposition, à supposer que le budget le permette.",
      "japanese": "予算が許すと仮定すれば、あなたの提案を受け入れます。",
      "points": [
        "à supposer que + 接続法"
      ]
    },
    {
      "id": 118,
      "level": "B2",
      "category": "接続法",
      "french": "Il a tout préparé de sorte que nous n'ayons plus qu'à vérifier les chiffres.",
      "japanese": "彼がすべて準備してくれたので、私たちは数字を確認するだけでよい。",
      "points": [
        "de sorte que + 接続法（目的・結果の捉え方）",
        "n'avoir plus qu'à"
      ]
    },
    {
      "id": 119,
      "level": "B2",
      "category": "接続法",
      "french": "Je souhaiterais que cette discussion reste confidentielle.",
      "japanese": "この話し合いは内密にしていただきたいです。",
      "points": [
        "souhaiter que + 接続法"
      ]
    },
    {
      "id": 120,
      "level": "B2",
      "category": "接続法",
      "french": "Il est indispensable que chacun ait accès aux mêmes informations.",
      "japanese": "全員が同じ情報にアクセスできることが不可欠だ。",
      "points": [
        "il est indispensable que + 接続法"
      ]
    },
    {
      "id": 121,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle m'a expliqué qu'elle avait déjà envoyé le dossier la veille.",
      "japanese": "彼女は、その前日にすでに書類を送ったと説明した。",
      "points": [
        "過去の発話よりさらに前 → plus-que-parfait",
        "la veille = 前日"
      ]
    },
    {
      "id": 122,
      "level": "B2",
      "category": "時制の一致",
      "french": "Je pensais qu'il avait compris ce que nous attendions de lui.",
      "japanese": "私は、彼が私たちの期待していることを理解したと思っていた。",
      "points": [
        "pensais と avait compris の時制関係",
        "ce que"
      ]
    },
    {
      "id": 123,
      "level": "B2",
      "category": "時制の一致",
      "french": "Il a annoncé qu'il quitterait l'entreprise à la fin du mois.",
      "japanese": "彼は月末で会社を辞めると発表した。",
      "points": [
        "過去から見た未来 → conditionnel présent"
      ]
    },
    {
      "id": 124,
      "level": "B2",
      "category": "時制の一致",
      "french": "Nous savions qu'elle travaillait sur ce projet depuis plusieurs mois.",
      "japanese": "私たちは、彼女が数か月前からそのプロジェクトに取り組んでいることを知っていた。",
      "points": [
        "過去と同時進行 → imparfait",
        "depuis + 期間"
      ]
    },
    {
      "id": 125,
      "level": "B2",
      "category": "時制の一致",
      "french": "Il m'a demandé si j'avais reçu son message.",
      "japanese": "彼は、私が彼のメッセージを受け取ったか尋ねた。",
      "points": [
        "間接疑問",
        "過去より前 → plus-que-parfait"
      ]
    },
    {
      "id": 126,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle a précisé qu'elle nous contacterait dès qu'elle aurait obtenu une réponse.",
      "japanese": "彼女は、返答を得次第こちらに連絡すると明言した。",
      "points": [
        "過去から見た未来",
        "dès que 以下も未来完了相当"
      ]
    },
    {
      "id": 127,
      "level": "B2",
      "category": "時制の一致",
      "french": "Je croyais que le magasin fermait à vingt heures.",
      "japanese": "その店は20時に閉まると思っていた。",
      "points": [
        "過去時点での事実認識 → imparfait"
      ]
    },
    {
      "id": 128,
      "level": "B2",
      "category": "時制の一致",
      "french": "On nous avait assuré que les travaux seraient terminés avant l'été.",
      "japanese": "工事は夏前に終わると私たちは聞かされていた。",
      "points": [
        "plus-que-parfait + conditionnel",
        "過去から見た未来"
      ]
    },
    {
      "id": 129,
      "level": "B2",
      "category": "時制の一致",
      "french": "Il a reconnu qu'il s'était trompé dans ses calculs.",
      "japanese": "彼は計算を間違えていたことを認めた。",
      "points": [
        "過去より前 → plus-que-parfait",
        "se tromper"
      ]
    },
    {
      "id": 130,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle racontait qu'elle avait vécu à Montréal lorsqu'elle était étudiante.",
      "japanese": "彼女は学生時代にモントリオールに住んでいたと話していた。",
      "points": [
        "語りの基準時より前 → plus-que-parfait",
        "背景 → imparfait"
      ]
    },
    {
      "id": 131,
      "level": "B2",
      "category": "時制の一致",
      "french": "Je ne savais pas que tu étais déjà parti quand je t'ai appelé.",
      "japanese": "電話したとき、君がもう出発していたとは知らなかった。",
      "points": [
        "étais parti = plus-que-parfait",
        "quand + passé composé"
      ]
    },
    {
      "id": 132,
      "level": "B2",
      "category": "時制の一致",
      "french": "Le responsable a déclaré que la situation s'améliorait progressivement.",
      "japanese": "責任者は、状況は徐々に改善していると述べた。",
      "points": [
        "過去の発言時と同時 → imparfait"
      ]
    },
    {
      "id": 133,
      "level": "B2",
      "category": "時制の一致",
      "french": "Nous espérions que les résultats confirmeraient notre hypothèse.",
      "japanese": "私たちは、結果が仮説を裏づけることを期待していた。",
      "points": [
        "過去から見た未来 → conditionnel"
      ]
    },
    {
      "id": 134,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle m'a dit qu'elle ne pourrait pas venir parce qu'elle devait travailler.",
      "japanese": "彼女は、仕事をしなければならないので来られないと言った。",
      "points": [
        "pourrait = 過去から見た未来",
        "devait = 同時の事情"
      ]
    },
    {
      "id": 135,
      "level": "B2",
      "category": "時制の一致",
      "french": "Il avait promis qu'il nous préviendrait dès qu'il connaîtrait la date exacte.",
      "japanese": "彼は、正確な日付が分かり次第知らせると約束していた。",
      "points": [
        "conditionnel で過去から見た未来",
        "dès que の時制"
      ]
    },
    {
      "id": 136,
      "level": "B2",
      "category": "時制の一致",
      "french": "Je me suis rendu compte que j'avais laissé mes clés au bureau.",
      "japanese": "鍵を職場に置いてきたことに気づいた。",
      "points": [
        "気づいた時点より前 → plus-que-parfait"
      ]
    },
    {
      "id": 137,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle pensait que nous avions déjà pris une décision.",
      "japanese": "彼女は、私たちがすでに決断を下したと思っていた。",
      "points": [
        "pensait より前 → plus-que-parfait"
      ]
    },
    {
      "id": 138,
      "level": "B2",
      "category": "時制の一致",
      "french": "Le médecin lui a expliqué qu'il devrait se reposer pendant quelques jours.",
      "japanese": "医師は彼に、数日間休む必要があると説明した。",
      "points": [
        "過去の発話から見た未来・義務 → conditionnel"
      ]
    },
    {
      "id": 139,
      "level": "B2",
      "category": "時制の一致",
      "french": "Ils ont appris que l'événement avait été annulé en raison de la météo.",
      "japanese": "彼らは、その催しが天候のため中止になったことを知った。",
      "points": [
        "知った時点より前 → plus-que-parfait",
        "受動態"
      ]
    },
    {
      "id": 140,
      "level": "B2",
      "category": "時制の一致",
      "french": "Je lui ai demandé ce qu'il comptait faire après son diplôme.",
      "japanese": "卒業後に何をするつもりなのか彼に尋ねた。",
      "points": [
        "間接疑問",
        "過去時点の予定 → imparfait"
      ]
    },
    {
      "id": 141,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle a affirmé qu'elle n'avait jamais rencontré cette personne auparavant.",
      "japanese": "彼女は、その人物にはそれまで一度も会ったことがないと断言した。",
      "points": [
        "plus-que-parfait",
        "auparavant = それ以前に"
      ]
    },
    {
      "id": 142,
      "level": "B2",
      "category": "時制の一致",
      "french": "Nous pensions que le problème serait résolu avant notre arrivée.",
      "japanese": "私たちは、到着前に問題は解決されると思っていた。",
      "points": [
        "過去から見た未来の受動態"
      ]
    },
    {
      "id": 143,
      "level": "B2",
      "category": "時制の一致",
      "french": "Il m'a raconté qu'il avait commencé à apprendre le français lorsqu'il vivait en Belgique.",
      "japanese": "彼はベルギーに住んでいた頃にフランス語を学び始めたと話してくれた。",
      "points": [
        "開始した出来事 = plus-que-parfait",
        "背景 = imparfait"
      ]
    },
    {
      "id": 144,
      "level": "B2",
      "category": "時制の一致",
      "french": "Le rapport indiquait que les ventes avaient diminué au cours du trimestre précédent.",
      "japanese": "報告書には、前四半期に売上が減少したと記されていた。",
      "points": [
        "過去の記述より前 → plus-que-parfait"
      ]
    },
    {
      "id": 145,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle a promis qu'elle ferait tout son possible pour respecter le délai.",
      "japanese": "彼女は期限を守るため最善を尽くすと約束した。",
      "points": [
        "過去から見た未来 → conditionnel",
        "faire tout son possible"
      ]
    },
    {
      "id": 146,
      "level": "B2",
      "category": "時制の一致",
      "french": "Je pensais que tu savais déjà pourquoi la réunion avait été reportée.",
      "japanese": "会議が延期された理由を君はもう知っていると思っていた。",
      "points": [
        "savais = 同時",
        "avait été reportée = さらに前"
      ]
    },
    {
      "id": 147,
      "level": "B2",
      "category": "時制の一致",
      "french": "Le professeur nous avait prévenus que l'examen serait plus difficile que celui de l'année précédente.",
      "japanese": "教授は、その試験は前年のものより難しくなると私たちに事前に知らせていた。",
      "points": [
        "avait prévenus + serait",
        "過去から見た未来"
      ]
    },
    {
      "id": 148,
      "level": "B2",
      "category": "時制の一致",
      "french": "Ils ont expliqué qu'ils avaient dû modifier leur stratégie après que le marché avait changé.",
      "japanese": "市場が変化した後、戦略を変更せざるを得なかったと彼らは説明した。",
      "points": [
        "avaient dû = 過去より前",
        "après que + 直説法"
      ]
    },
    {
      "id": 149,
      "level": "B2",
      "category": "時制の一致",
      "french": "Je savais qu'il finirait par accepter, même s'il hésitait encore.",
      "japanese": "彼がまだ迷っていても、最終的には受け入れるだろうと分かっていた。",
      "points": [
        "finirait = 過去から見た未来",
        "hésitait = 同時の状態"
      ]
    },
    {
      "id": 150,
      "level": "B2",
      "category": "時制の一致",
      "french": "Elle m'a demandé quand nous aurions terminé l'analyse.",
      "japanese": "彼女は、私たちがいつ分析を終えるのか尋ねた。",
      "points": [
        "過去から見た未来の完了 → conditionnel passé",
        "間接疑問"
      ]
    },
    {
      "id": 151,
      "level": "B2",
      "category": "受動態",
      "french": "Le rapport sera publié dès que les dernières vérifications auront été effectuées.",
      "japanese": "最終確認が終わり次第、報告書は公表される。",
      "points": [
        "être + participe passé で受動態",
        "futur antérieur passif"
      ]
    },
    {
      "id": 152,
      "level": "B2",
      "category": "受動態",
      "french": "Plusieurs mesures ont été prises afin de réduire les risques d'erreur.",
      "japanese": "ミスのリスクを減らすために、いくつかの対策が講じられた。",
      "points": [
        "prendre des mesures → des mesures ont été prises"
      ]
    },
    {
      "id": 153,
      "level": "B2",
      "category": "受動態",
      "french": "La proposition a été rejetée par une majorité des membres du comité.",
      "japanese": "その提案は委員会メンバーの過半数によって否決された。",
      "points": [
        "受動態 + par"
      ]
    },
    {
      "id": 154,
      "level": "B2",
      "category": "受動態",
      "french": "Ce bâtiment a été conçu par un architecte japonais dans les années 1980.",
      "japanese": "この建物は1980年代に日本人建築家によって設計された。",
      "points": [
        "concevoir → être conçu"
      ]
    },
    {
      "id": 155,
      "level": "B2",
      "category": "受動態",
      "french": "Les résultats doivent être interprétés avec prudence.",
      "japanese": "結果は慎重に解釈されなければならない。",
      "points": [
        "devoir + être + participe passé"
      ]
    },
    {
      "id": 156,
      "level": "B2",
      "category": "受動態",
      "french": "Aucune décision ne sera prise avant la fin des négociations.",
      "japanese": "交渉が終わるまでは、いかなる決定も下されない。",
      "points": [
        "否定語 aucune",
        "futur passif"
      ]
    },
    {
      "id": 157,
      "level": "B2",
      "category": "受動態",
      "french": "Le problème aurait pu être évité si les consignes avaient été respectées.",
      "japanese": "指示が守られていれば、その問題は避けられた可能性がある。",
      "points": [
        "conditionnel passé passif",
        "si + plus-que-parfait"
      ]
    },
    {
      "id": 158,
      "level": "B2",
      "category": "受動態",
      "french": "Les participants seront informés de tout changement par courrier électronique.",
      "japanese": "参加者には、変更があればすべてメールで通知される。",
      "points": [
        "informer quelqu'un de",
        "受動態"
      ]
    },
    {
      "id": 159,
      "level": "B2",
      "category": "受動態",
      "french": "Cette méthode est largement utilisée dans les laboratoires européens.",
      "japanese": "この方法はヨーロッパの研究室で広く使われている。",
      "points": [
        "présent passif",
        "largement = 広く"
      ]
    },
    {
      "id": 160,
      "level": "B2",
      "category": "受動態",
      "french": "Le manuscrit est actuellement en train d'être relu par deux spécialistes.",
      "japanese": "その原稿は現在、2人の専門家によって校閲されている最中だ。",
      "points": [
        "être en train d'être + participe passé"
      ]
    },
    {
      "id": 161,
      "level": "B2",
      "category": "受動態",
      "french": "Une enquête a été ouverte pour déterminer les causes de l'accident.",
      "japanese": "事故の原因を明らかにするため、調査が開始された。",
      "points": [
        "ouvrir une enquête → une enquête a été ouverte"
      ]
    },
    {
      "id": 162,
      "level": "B2",
      "category": "受動態",
      "french": "Il a été décidé que la réunion aurait lieu à huis clos.",
      "japanese": "会議は非公開で行われることが決定された。",
      "points": [
        "受動的な非人称構文 il a été décidé que",
        "à huis clos"
      ]
    },
    {
      "id": 163,
      "level": "B2",
      "category": "受動態",
      "french": "Les données recueillies seront conservées pendant une période de cinq ans.",
      "japanese": "収集されたデータは5年間保存される。",
      "points": [
        "participe passé recueillies",
        "futur passif"
      ]
    },
    {
      "id": 164,
      "level": "B2",
      "category": "受動態",
      "french": "Cette hypothèse n'a jamais été sérieusement remise en question.",
      "japanese": "この仮説はこれまで真剣に疑問視されたことがない。",
      "points": [
        "remettre en question",
        "passé composé passif"
      ]
    },
    {
      "id": 165,
      "level": "B2",
      "category": "受動態",
      "french": "Le nouveau règlement devrait être adopté avant la fin de l'année.",
      "japanese": "新しい規則は年末までに採択される見込みだ。",
      "points": [
        "conditionnel + passif",
        "adopter un règlement"
      ]
    },
    {
      "id": 166,
      "level": "B2",
      "category": "受動態",
      "french": "La cérémonie a dû être annulée en raison des fortes pluies.",
      "japanese": "激しい雨のため、式典は中止せざるを得なかった。",
      "points": [
        "devoir au passé composé + infinitif passif"
      ]
    },
    {
      "id": 167,
      "level": "B2",
      "category": "受動態",
      "french": "Les candidatures sont examinées dans l'ordre où elles sont reçues.",
      "japanese": "応募は受理された順に審査される。",
      "points": [
        "présent passif",
        "dans l'ordre où"
      ]
    },
    {
      "id": 168,
      "level": "B2",
      "category": "受動態",
      "french": "Le projet est financé en partie par des fonds publics.",
      "japanese": "そのプロジェクトは一部、公的資金によって賄われている。",
      "points": [
        "être financé par",
        "en partie"
      ]
    },
    {
      "id": 169,
      "level": "B2",
      "category": "受動態",
      "french": "Toutes les dépenses devront être justifiées par des documents officiels.",
      "japanese": "すべての支出について、公的書類による証明が必要となる。",
      "points": [
        "futur + devoir + passif",
        "justifier une dépense"
      ]
    },
    {
      "id": 170,
      "level": "B2",
      "category": "受動態",
      "french": "Le suspect aurait été aperçu près de la gare peu avant minuit.",
      "japanese": "容疑者は午前0時少し前に駅の近くで目撃されたとされる。",
      "points": [
        "conditionnel passé passif で未確認情報"
      ]
    },
    {
      "id": 171,
      "level": "B2",
      "category": "受動態",
      "french": "Cette œuvre est considérée comme l'une des plus importantes de l'artiste.",
      "japanese": "この作品は、その芸術家の最も重要な作品の一つとみなされている。",
      "points": [
        "considérer A comme B → A est considéré comme B"
      ]
    },
    {
      "id": 172,
      "level": "B2",
      "category": "受動態",
      "french": "Le texte devra être entièrement réécrit avant de pouvoir être publié.",
      "japanese": "その文章は、公表できるようになる前に全面的に書き直す必要がある。",
      "points": [
        "devoir être réécrit",
        "pouvoir être publié"
      ]
    },
    {
      "id": 173,
      "level": "B2",
      "category": "受動態",
      "french": "On estime que près de deux millions de personnes sont concernées par cette réforme.",
      "japanese": "この改革の対象者は約200万人と推定されている。",
      "points": [
        "on + active で受動的意味",
        "être concerné par"
      ]
    },
    {
      "id": 174,
      "level": "B2",
      "category": "受動態",
      "french": "Il est généralement admis que cette pratique présente certains risques.",
      "japanese": "この慣行には一定のリスクがあることが一般に認められている。",
      "points": [
        "il est admis que = 非人称受動構文"
      ]
    },
    {
      "id": 175,
      "level": "B2",
      "category": "受動態",
      "french": "Les travaux avaient été achevés plusieurs semaines avant l'ouverture officielle.",
      "japanese": "工事は正式な開業の数週間前に完了していた。",
      "points": [
        "plus-que-parfait passif"
      ]
    },
    {
      "id": 176,
      "level": "B2",
      "category": "受動態",
      "french": "Une attention particulière doit être accordée à la protection des données personnelles.",
      "japanese": "個人情報の保護には特に注意を払わなければならない。",
      "points": [
        "accorder une attention à → attention doit être accordée à"
      ]
    },
    {
      "id": 177,
      "level": "B2",
      "category": "受動態",
      "french": "Le musée sera fermé au public pendant toute la durée des travaux.",
      "japanese": "工事期間中、美術館は一般客に閉鎖される。",
      "points": [
        "être fermé au public",
        "pendant toute la durée de"
      ]
    },
    {
      "id": 178,
      "level": "B2",
      "category": "受動態",
      "french": "Les conclusions de l'étude ont été contestées par plusieurs chercheurs indépendants.",
      "japanese": "その研究の結論は、複数の独立した研究者から異議を唱えられた。",
      "points": [
        "contester → être contesté par"
      ]
    },
    {
      "id": 179,
      "level": "B2",
      "category": "受動態",
      "french": "Il ne peut être exclu que d'autres facteurs aient influencé les résultats.",
      "japanese": "他の要因が結果に影響した可能性を排除することはできない。",
      "points": [
        "il ne peut être exclu que",
        "接続法過去 aient influencé"
      ]
    },
    {
      "id": 180,
      "level": "B2",
      "category": "受動態",
      "french": "Les règles ont été modifiées de manière à ce qu'elles puissent être appliquées plus facilement.",
      "japanese": "規則は、より容易に適用できるよう変更された。",
      "points": [
        "passé composé passif",
        "de manière à ce que + 接続法"
      ]
    },
    {
      "id": 181,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Tu as besoin de ces documents ? Oui, j'en ai besoin pour préparer la réunion.",
      "japanese": "その書類が必要なの？ うん、会議の準備に必要なんだ。",
      "points": [
        "en は de + 名詞を受ける",
        "avoir besoin de"
      ]
    },
    {
      "id": 182,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Elle parle souvent de son séjour à Lyon, mais elle n'en raconte jamais les détails.",
      "japanese": "彼女はリヨン滞在についてよく話すが、その詳しいことは決して語らない。",
      "points": [
        "en = de son séjour",
        "raconter les détails de"
      ]
    },
    {
      "id": 183,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Nous avons reçu plusieurs propositions, mais je n'en trouve aucune vraiment satisfaisante.",
      "japanese": "いくつか提案を受け取ったが、その中に本当に満足できるものは一つもない。",
      "points": [
        "en は plusieurs propositions を受ける",
        "n'en trouver aucune = その中に一つも～を見つけない"
      ]
    },
    {
      "id": 184,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Il a acheté trois romans français et il en a déjà lu deux.",
      "japanese": "彼はフランス語の小説を3冊買い、そのうち2冊はもう読んだ。",
      "points": [
        "数量表現と en",
        "en + 数量"
      ]
    },
    {
      "id": 185,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Je ne m'attendais pas à cette réaction, et j'en ai été assez surpris.",
      "japanese": "私はその反応を予想しておらず、かなり驚いた。",
      "points": [
        "en = de cette réaction",
        "être surpris de"
      ]
    },
    {
      "id": 186,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Ils discutent de cette question depuis des mois sans jamais en venir à une conclusion.",
      "japanese": "彼らは何か月もこの問題を議論しているが、結論には至っていない。",
      "points": [
        "en venir à = 最終的に～に至る",
        "慣用的 en"
      ]
    },
    {
      "id": 187,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Tu te souviens de ce restaurant ? Oui, je m'en souviens très bien.",
      "japanese": "あのレストラン覚えてる？ うん、よく覚えているよ。",
      "points": [
        "se souvenir de → s'en souvenir"
      ]
    },
    {
      "id": 188,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Nous avons entendu parler de ce projet, mais nous n'en savons pas grand-chose.",
      "japanese": "そのプロジェクトについては聞いたことがあるが、あまり詳しくは知らない。",
      "points": [
        "en = de ce projet",
        "ne pas savoir grand-chose"
      ]
    },
    {
      "id": 189,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Elle est fière de ses progrès, et elle a de bonnes raisons d'en être satisfaite.",
      "japanese": "彼女は自分の進歩を誇りに思っていて、それに満足する十分な理由がある。",
      "points": [
        "être satisfait de → en être satisfait"
      ]
    },
    {
      "id": 190,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "J'ai acheté du fromage, mais il n'en reste presque plus.",
      "japanese": "チーズを買ったが、もうほとんど残っていない。",
      "points": [
        "部分冠詞 du を en で受ける",
        "il en reste"
      ]
    },
    {
      "id": 191,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Tu vas à la bibliothèque cet après-midi ? Oui, j'y vais vers trois heures.",
      "japanese": "今日の午後、図書館に行くの？ うん、3時ごろ行くよ。",
      "points": [
        "y = à + 場所",
        "aller à → y aller"
      ]
    },
    {
      "id": 192,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Nous avons réfléchi à cette possibilité, mais nous n'y avons pas encore donné suite.",
      "japanese": "その可能性について検討したが、まだ具体的な対応には移していない。",
      "points": [
        "y = à cette possibilité",
        "donner suite à"
      ]
    },
    {
      "id": 193,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Elle tient beaucoup à son indépendance et elle n'est pas prête à y renoncer.",
      "japanese": "彼女は自立をとても大切にしており、それを手放すつもりはない。",
      "points": [
        "renoncer à → y renoncer",
        "tenir à"
      ]
    },
    {
      "id": 194,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Ce problème est plus complexe qu'il n'y paraît.",
      "japanese": "この問題は見た目以上に複雑だ。",
      "points": [
        "il y paraît は慣用的表現",
        "ne explétif"
      ]
    },
    {
      "id": 195,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Je n'avais jamais pensé à cette solution, mais je vais y réfléchir sérieusement.",
      "japanese": "その解決策は考えたことがなかったが、真剣に検討してみる。",
      "points": [
        "réfléchir à → y réfléchir"
      ]
    },
    {
      "id": 196,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Ils se sont habitués à travailler à distance et ne veulent plus y renoncer complètement.",
      "japanese": "彼らはリモート勤務に慣れ、もう完全には手放したくないと思っている。",
      "points": [
        "s'habituer à",
        "y = à travailler à distance"
      ]
    },
    {
      "id": 197,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Le sujet est délicat, mais il faut tout de même y faire face.",
      "japanese": "その問題は難しいが、それでも向き合わなければならない。",
      "points": [
        "faire face à → y faire face"
      ]
    },
    {
      "id": 198,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Je compte participer à la conférence, à condition de pouvoir m'y inscrire à temps.",
      "japanese": "間に合って登録できるなら、その学会に参加するつもりだ。",
      "points": [
        "s'inscrire à → s'y inscrire",
        "y = à la conférence"
      ]
    },
    {
      "id": 199,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Elle pense souvent à son avenir, mais elle évite d'y penser trop longtemps.",
      "japanese": "彼女は将来のことをよく考えるが、考えすぎないようにしている。",
      "points": [
        "penser à → y penser"
      ]
    },
    {
      "id": 200,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Nous sommes allés dans ce village l'été dernier et nous aimerions y retourner.",
      "japanese": "昨夏その村に行き、また行きたいと思っている。",
      "points": [
        "y = dans ce village",
        "retourner à/dans un lieu"
      ]
    },
    {
      "id": 201,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Il se plaint souvent de son travail, mais il n'envisage pas d'en changer.",
      "japanese": "彼はよく仕事の不満を言うが、転職するつもりはない。",
      "points": [
        "changer de travail → en changer",
        "envisager de"
      ]
    },
    {
      "id": 202,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Cette expérience lui a beaucoup appris, et il en tire encore des leçons aujourd'hui.",
      "japanese": "この経験から彼は多くを学び、今でもそこから教訓を得ている。",
      "points": [
        "tirer des leçons de → en tirer des leçons"
      ]
    },
    {
      "id": 203,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Je doute de l'efficacité de cette mesure, mais je préfère ne pas en juger trop vite.",
      "japanese": "この措置の効果には疑問があるが、早急に判断するのは避けたい。",
      "points": [
        "juger de → en juger",
        "douter de"
      ]
    },
    {
      "id": 204,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Elle a reçu plusieurs offres d'emploi et elle en examine actuellement deux avec attention.",
      "japanese": "彼女はいくつか仕事のオファーを受け、現在そのうち2つを慎重に検討している。",
      "points": [
        "en + 数量",
        "examiner deux offres"
      ]
    },
    {
      "id": 205,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Nous manquons de temps, mais nous devons nous en accommoder.",
      "japanese": "時間が足りないが、その状況でやりくりしなければならない。",
      "points": [
        "s'accommoder de → s'en accommoder"
      ]
    },
    {
      "id": 206,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Il n'est pas satisfait du résultat et il compte bien s'en plaindre.",
      "japanese": "彼は結果に満足しておらず、きちんと苦情を申し立てるつもりだ。",
      "points": [
        "se plaindre de → s'en plaindre"
      ]
    },
    {
      "id": 207,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Cette règle pose plusieurs problèmes, mais personne ne semble vouloir y remédier.",
      "japanese": "この規則はいくつか問題を引き起こしているが、誰もそれを改善しようとしていないようだ。",
      "points": [
        "remédier à → y remédier"
      ]
    },
    {
      "id": 208,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "J'avais peur de cette conversation, mais finalement je m'en suis plutôt bien sorti.",
      "japanese": "その話し合いが怖かったが、結局かなりうまく切り抜けた。",
      "points": [
        "s'en sortir = 切り抜ける",
        "慣用的 en"
      ]
    },
    {
      "id": 209,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Le succès dépendra de notre capacité à convaincre les partenaires ; il faut donc nous y préparer.",
      "japanese": "成功はパートナーを説得できるかにかかっているので、その準備をしなければならない。",
      "points": [
        "se préparer à → s'y préparer"
      ]
    },
    {
      "id": 210,
      "level": "B2",
      "category": "代名詞 en / y",
      "french": "Elle connaissait les risques et elle en avait pleinement conscience lorsqu'elle a accepté.",
      "japanese": "彼女はリスクを知っており、承諾した時点でそれを十分認識していた。",
      "points": [
        "avoir conscience de → en avoir conscience"
      ]
    },
    {
      "id": 211,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il a beau relire le document, il ne comprend toujours pas ce passage.",
      "japanese": "彼は何度その文書を読み返しても、その箇所がまだ理解できない。",
      "points": [
        "avoir beau + 不定詞 = いくら～しても"
      ]
    },
    {
      "id": 212,
      "level": "B2",
      "category": "慣用表現",
      "french": "Cette solution paraît simple à première vue, mais elle pose plusieurs difficultés en pratique.",
      "japanese": "この解決策は一見簡単に見えるが、実際にはいくつか問題がある。",
      "points": [
        "à première vue = 一見したところ"
      ]
    },
    {
      "id": 213,
      "level": "B2",
      "category": "慣用表現",
      "french": "Nous avons fini par trouver un compromis acceptable pour tout le monde.",
      "japanese": "私たちは最終的に、全員が受け入れられる妥協案を見つけた。",
      "points": [
        "finir par + 不定詞 = 結局～する"
      ]
    },
    {
      "id": 214,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il vaut mieux vérifier les chiffres deux fois plutôt que de corriger une erreur après coup.",
      "japanese": "後からミスを直すより、数字を二度確認したほうがよい。",
      "points": [
        "il vaut mieux = ～したほうがよい",
        "après coup = 後になって"
      ]
    },
    {
      "id": 215,
      "level": "B2",
      "category": "慣用表現",
      "french": "Elle a pris la parole pour mettre les choses au clair.",
      "japanese": "彼女は状況をはっきりさせるために発言した。",
      "points": [
        "prendre la parole = 発言する",
        "mettre les choses au clair = はっきりさせる"
      ]
    },
    {
      "id": 216,
      "level": "B2",
      "category": "慣用表現",
      "french": "Nous devons tenir compte des contraintes budgétaires avant de choisir une option.",
      "japanese": "選択肢を決める前に、予算上の制約を考慮しなければならない。",
      "points": [
        "tenir compte de = ～を考慮する"
      ]
    },
    {
      "id": 217,
      "level": "B2",
      "category": "慣用表現",
      "french": "Ce détail risque de passer inaperçu si personne n'y prête attention.",
      "japanese": "誰も注意を払わなければ、この細部は見落とされるおそれがある。",
      "points": [
        "passer inaperçu = 気づかれない",
        "prêter attention à"
      ]
    },
    {
      "id": 218,
      "level": "B2",
      "category": "慣用表現",
      "french": "Après plusieurs mois de négociations, les deux parties sont enfin parvenues à un accord.",
      "japanese": "数か月の交渉の末、両者はようやく合意に達した。",
      "points": [
        "parvenir à un accord = 合意に達する"
      ]
    },
    {
      "id": 219,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il ne faut pas perdre de vue l'objectif principal du projet.",
      "japanese": "プロジェクトの主目的を見失ってはいけない。",
      "points": [
        "perdre de vue = 見失う"
      ]
    },
    {
      "id": 220,
      "level": "B2",
      "category": "慣用表現",
      "french": "Cette remarque a mis le directeur mal à l'aise.",
      "japanese": "その発言は部長を居心地の悪い気持ちにさせた。",
      "points": [
        "mettre quelqu'un mal à l'aise"
      ]
    },
    {
      "id": 221,
      "level": "B2",
      "category": "慣用表現",
      "french": "Je préfère prendre mon temps plutôt que de prendre une décision dans la précipitation.",
      "japanese": "急いで決断するより、時間をかけたい。",
      "points": [
        "prendre son temps = 時間をかける",
        "dans la précipitation = 慌てて"
      ]
    },
    {
      "id": 222,
      "level": "B2",
      "category": "慣用表現",
      "french": "On ne peut pas exclure cette possibilité d'emblée.",
      "japanese": "その可能性を最初から排除することはできない。",
      "points": [
        "d'emblée = 初めから"
      ]
    },
    {
      "id": 223,
      "level": "B2",
      "category": "慣用表現",
      "french": "Son argument tient la route, même si je ne partage pas entièrement sa conclusion.",
      "japanese": "彼の主張には筋が通っているが、結論に全面的に賛成しているわけではない。",
      "points": [
        "tenir la route = 筋が通る／妥当である"
      ]
    },
    {
      "id": 224,
      "level": "B2",
      "category": "慣用表現",
      "french": "La situation a pris une tournure inattendue après l'annonce du gouvernement.",
      "japanese": "政府の発表後、状況は予想外の展開を見せた。",
      "points": [
        "prendre une tournure = ～な展開になる"
      ]
    },
    {
      "id": 225,
      "level": "B2",
      "category": "慣用表現",
      "french": "Nous avons dû faire face à plusieurs imprévus pendant le voyage.",
      "japanese": "旅行中、いくつもの予期せぬ事態に対処しなければならなかった。",
      "points": [
        "faire face à = ～に直面する／対処する"
      ]
    },
    {
      "id": 226,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il a remis en cause une hypothèse que tout le monde tenait pour acquise.",
      "japanese": "彼は、誰もが当然と思っていた仮説に疑問を投げかけた。",
      "points": [
        "remettre en cause = 疑問視する",
        "tenir pour acquis = 当然とみなす"
      ]
    },
    {
      "id": 227,
      "level": "B2",
      "category": "慣用表現",
      "french": "Elle a pris soin de vérifier chaque référence avant de rendre son rapport.",
      "japanese": "彼女は報告書を提出する前に、各参考文献を注意深く確認した。",
      "points": [
        "prendre soin de = 念入りに～する"
      ]
    },
    {
      "id": 228,
      "level": "B2",
      "category": "慣用表現",
      "french": "Au bout du compte, cette décision nous a fait gagner du temps.",
      "japanese": "結局のところ、この決定のおかげで時間を節約できた。",
      "points": [
        "au bout du compte = 結局のところ"
      ]
    },
    {
      "id": 229,
      "level": "B2",
      "category": "慣用表現",
      "french": "Je ne suis pas au courant des derniers changements apportés au programme.",
      "japanese": "プログラムに加えられた最新の変更について私は把握していない。",
      "points": [
        "être au courant de = ～を知っている"
      ]
    },
    {
      "id": 230,
      "level": "B2",
      "category": "慣用表現",
      "french": "Cette explication ne va pas de soi pour quelqu'un qui découvre le sujet.",
      "japanese": "この説明は、そのテーマを初めて知る人にとって自明ではない。",
      "points": [
        "aller de soi = 自明である"
      ]
    },
    {
      "id": 231,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il faut garder à l'esprit que les chiffres ne racontent qu'une partie de l'histoire.",
      "japanese": "数字が物事の一面しか示していないことを念頭に置く必要がある。",
      "points": [
        "garder à l'esprit = 念頭に置く"
      ]
    },
    {
      "id": 232,
      "level": "B2",
      "category": "慣用表現",
      "french": "Elle a mis du temps à se rendre compte de l'ampleur du problème.",
      "japanese": "彼女は問題の深刻さに気づくまで時間がかかった。",
      "points": [
        "se rendre compte de = ～に気づく",
        "mettre du temps à"
      ]
    },
    {
      "id": 233,
      "level": "B2",
      "category": "慣用表現",
      "french": "Nous sommes tombés d'accord sur les objectifs, mais pas sur les moyens.",
      "japanese": "目標については意見が一致したが、手段については一致しなかった。",
      "points": [
        "tomber d'accord = 意見が一致する"
      ]
    },
    {
      "id": 234,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il a fait preuve d'un grand sang-froid pendant la crise.",
      "japanese": "彼は危機の最中に非常に冷静な対応を見せた。",
      "points": [
        "faire preuve de = ～を示す",
        "sang-froid = 冷静さ"
      ]
    },
    {
      "id": 235,
      "level": "B2",
      "category": "慣用表現",
      "french": "Le projet a été mis en œuvre plus rapidement que prévu.",
      "japanese": "そのプロジェクトは予想より早く実施された。",
      "points": [
        "mettre en œuvre = 実施する"
      ]
    },
    {
      "id": 236,
      "level": "B2",
      "category": "慣用表現",
      "french": "Cette mesure entre en vigueur à partir du 1er janvier.",
      "japanese": "この措置は1月1日から施行される。",
      "points": [
        "entrer en vigueur = 施行される"
      ]
    },
    {
      "id": 237,
      "level": "B2",
      "category": "慣用表現",
      "french": "Nous devons faire le point avant de décider de la suite.",
      "japanese": "今後を決める前に、現状を整理する必要がある。",
      "points": [
        "faire le point = 状況を整理する"
      ]
    },
    {
      "id": 238,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il n'est pas question de réduire la qualité pour respecter le délai.",
      "japanese": "期限を守るために品質を落とすつもりはまったくない。",
      "points": [
        "il n'est pas question de = ～するつもりはない"
      ]
    },
    {
      "id": 239,
      "level": "B2",
      "category": "慣用表現",
      "french": "Cette hypothèse mérite d'être prise au sérieux.",
      "japanese": "この仮説は真剣に検討する価値がある。",
      "points": [
        "prendre au sérieux = 真剣に受け止める"
      ]
    },
    {
      "id": 240,
      "level": "B2",
      "category": "慣用表現",
      "french": "Nous avons dû revoir nos priorités de fond en comble.",
      "japanese": "私たちは優先順位を根本から見直さなければならなかった。",
      "points": [
        "de fond en comble = 徹底的に／根本から"
      ]
    },
    {
      "id": 241,
      "level": "B2",
      "category": "慣用表現",
      "french": "À force de repousser la décision, nous risquons de perdre une occasion importante.",
      "japanese": "決定を先延ばしにし続けると、重要な機会を逃すおそれがある。",
      "points": [
        "à force de = ～し続けることで"
      ]
    },
    {
      "id": 242,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il a pris ses distances avec une position qu'il défendait encore l'année dernière.",
      "japanese": "彼は昨年まで支持していた立場から距離を置くようになった。",
      "points": [
        "prendre ses distances avec = ～と距離を置く"
      ]
    },
    {
      "id": 243,
      "level": "B2",
      "category": "慣用表現",
      "french": "La nouvelle stratégie commence à porter ses fruits.",
      "japanese": "新しい戦略は成果を上げ始めている。",
      "points": [
        "porter ses fruits = 成果を生む"
      ]
    },
    {
      "id": 244,
      "level": "B2",
      "category": "慣用表現",
      "french": "Cette affaire a donné lieu à de nombreux débats dans la presse.",
      "japanese": "この件は報道で多くの議論を引き起こした。",
      "points": [
        "donner lieu à = ～を引き起こす"
      ]
    },
    {
      "id": 245,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il s'est rendu sur place pour se faire une idée plus précise de la situation.",
      "japanese": "彼は状況をより正確に把握するため現地へ赴いた。",
      "points": [
        "se rendre sur place = 現地へ行く",
        "se faire une idée = 見当をつける"
      ]
    },
    {
      "id": 246,
      "level": "B2",
      "category": "慣用表現",
      "french": "Nous devons éviter de tirer des conclusions hâtives à partir de données encore incomplètes.",
      "japanese": "まだ不完全なデータから性急な結論を出すのは避けなければならない。",
      "points": [
        "tirer des conclusions = 結論を出す",
        "hâtif = 性急な"
      ]
    },
    {
      "id": 247,
      "level": "B2",
      "category": "慣用表現",
      "french": "Cette décision ne fait pas l'unanimité au sein de l'équipe.",
      "japanese": "この決定はチーム内で全員の支持を得ているわけではない。",
      "points": [
        "faire l'unanimité = 全員の一致を得る"
      ]
    },
    {
      "id": 248,
      "level": "B2",
      "category": "慣用表現",
      "french": "Il a tenu à préciser qu'aucune décision définitive n'avait encore été prise.",
      "japanese": "彼は、最終決定はまだ下されていないとわざわざ明言した。",
      "points": [
        "tenir à + 不定詞 = ～することを重視する"
      ]
    },
    {
      "id": 249,
      "level": "B2",
      "category": "慣用表現",
      "french": "La proposition a été laissée de côté faute de moyens suffisants.",
      "japanese": "十分な手段がなかったため、その提案は見送られた。",
      "points": [
        "laisser de côté = 脇に置く／見送る",
        "faute de = ～がないため"
      ]
    },
    {
      "id": 250,
      "level": "B2",
      "category": "慣用表現",
      "french": "Même si le calendrier est serré, nous avons encore une marge de manœuvre.",
      "japanese": "日程は厳しいが、まだ対応の余地はある。",
      "points": [
        "marge de manœuvre = 裁量・対応の余地"
      ]
    },
    {
      "id": 251,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Même si le télétravail offre davantage de liberté, il peut aussi renforcer l'isolement lorsque les échanges informels deviennent trop rares.",
      "japanese": "テレワークはより大きな自由を与える一方で、気軽な交流が少なくなりすぎると孤立を強めることもある。",
      "points": [
        "même si = たとえ～でも",
        "lorsque = ～するとき"
      ]
    },
    {
      "id": 252,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Plus les outils numériques deviennent performants, plus il est important de réfléchir à la manière dont nous les utilisons.",
      "japanese": "デジタルツールの性能が高まれば高まるほど、それをどう使うかを考えることが重要になる。",
      "points": [
        "plus..., plus... = ～すればするほど",
        "la manière dont"
      ]
    },
    {
      "id": 253,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Bien que les transports publics se soient améliorés, de nombreux habitants continuent à utiliser leur voiture faute d'alternative pratique.",
      "japanese": "公共交通機関は改善したものの、実用的な代替手段がないため、多くの住民は依然として車を使っている。",
      "points": [
        "bien que + 接続法",
        "faute de = ～がないため"
      ]
    },
    {
      "id": 254,
      "level": "B2",
      "category": "複合的な文章",
      "french": "On ne peut réduire la consommation d'énergie sans modifier certaines habitudes, aussi difficiles soient-elles à remettre en cause.",
      "japanese": "一部の習慣がどれほど変えにくいとしても、それを見直さずにエネルギー消費を減らすことはできない。",
      "points": [
        "aussi + adjectif + soient-elles = どれほど～でも",
        "sans + 不定詞"
      ]
    },
    {
      "id": 255,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Si les entreprises veulent attirer de jeunes talents, elles devront proposer non seulement un salaire compétitif, mais aussi des conditions de travail flexibles.",
      "japanese": "企業が若い人材を引きつけたいなら、競争力のある給与だけでなく、柔軟な労働条件も提示する必要がある。",
      "points": [
        "non seulement..., mais aussi...",
        "si + présent → futur"
      ]
    },
    {
      "id": 256,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ce n'est pas parce qu'une information est largement partagée sur les réseaux sociaux qu'elle est nécessairement exacte.",
      "japanese": "ある情報がSNSで広く共有されているからといって、必ずしも正確だとは限らない。",
      "points": [
        "ce n'est pas parce que... que...",
        "nécessairement"
      ]
    },
    {
      "id": 257,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À mesure que la population vieillit, la question de l'accès aux soins devient de plus en plus difficile à ignorer.",
      "japanese": "人口の高齢化が進むにつれて、医療へのアクセスの問題はますます無視できなくなっている。",
      "points": [
        "à mesure que = ～につれて",
        "de plus en plus"
      ]
    },
    {
      "id": 258,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Alors que certains voient l'intelligence artificielle comme une menace, d'autres y voient surtout un moyen d'automatiser les tâches répétitives.",
      "japanese": "人工知能を脅威とみなす人がいる一方で、反復作業を自動化する手段と捉える人もいる。",
      "points": [
        "alors que = ～する一方で",
        "y voir = そこに～を見る"
      ]
    },
    {
      "id": 259,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Pour peu que les règles soient clairement définies, une équipe internationale peut travailler efficacement malgré les différences culturelles.",
      "japanese": "ルールが明確に定められてさえいれば、国際的なチームでも文化の違いを越えて効率よく働ける。",
      "points": [
        "pour peu que + 接続法 = ～しさえすれば",
        "malgré + 名詞"
      ]
    },
    {
      "id": 260,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le projet a été lancé avant que toutes les difficultés aient été identifiées, ce qui explique en partie les retards actuels.",
      "japanese": "すべての問題点が特定される前にプロジェクトが開始されたため、それが現在の遅れの一因となっている。",
      "points": [
        "avant que + 接続法",
        "ce qui explique"
      ]
    },
    {
      "id": 261,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il serait imprudent de généraliser ces résultats, d'autant plus que l'étude ne portait que sur un nombre limité de participants.",
      "japanese": "その研究の参加者数は限られていたのだから、なおさら結果を一般化するのは軽率だろう。",
      "points": [
        "d'autant plus que = なおさら～なので",
        "conditionnel de prudence"
      ]
    },
    {
      "id": 262,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Quelles que soient les raisons de cette baisse, il faudra vérifier si elle correspond à une tendance durable ou à un phénomène temporaire.",
      "japanese": "この減少の理由が何であれ、持続的な傾向なのか一時的な現象なのかを確認する必要がある。",
      "points": [
        "quelles que soient = 何であれ",
        "si... ou..."
      ]
    },
    {
      "id": 263,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La ville souhaite limiter la circulation automobile tout en veillant à ne pas pénaliser les habitants des zones mal desservies.",
      "japanese": "市は、自動車交通を制限する一方で、公共交通の便が悪い地域の住民に不利益を与えないよう配慮したいと考えている。",
      "points": [
        "tout en + participe présent",
        "veiller à ne pas"
      ]
    },
    {
      "id": 264,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À supposer que le financement soit obtenu, encore faudra-t-il recruter suffisamment de personnel pour respecter le calendrier.",
      "japanese": "資金を確保できたとしても、日程を守るにはさらに十分な人員を採用しなければならない。",
      "points": [
        "à supposer que + 接続法",
        "encore faudra-t-il"
      ]
    },
    {
      "id": 265,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La réforme vise à simplifier les démarches, sans pour autant supprimer les contrôles jugés indispensables.",
      "japanese": "その改革は、不可欠とされる審査をなくすことなく、手続きを簡素化することを目的としている。",
      "points": [
        "sans pour autant = だからといって～することなく",
        "jugé + adjectif"
      ]
    },
    {
      "id": 266,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Plusieurs experts ont appelé à la prudence, estimant que les bénéfices annoncés pourraient avoir été surestimés.",
      "japanese": "複数の専門家は、発表された利点が過大評価されている可能性があるとして、慎重な対応を求めた。",
      "points": [
        "participe présent estimant",
        "pourraient avoir été + 過去分詞"
      ]
    },
    {
      "id": 267,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Même lorsque les objectifs sont clairs, un projet peut échouer si les responsabilités ne sont pas réparties de manière précise.",
      "japanese": "目標が明確であっても、責任分担が正確になされていなければプロジェクトは失敗しうる。",
      "points": [
        "même lorsque",
        "si + présent"
      ]
    },
    {
      "id": 268,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ce qui rend cette question particulièrement complexe, c'est qu'elle touche à la fois à l'économie, à l'environnement et aux habitudes individuelles.",
      "japanese": "この問題を特に複雑にしているのは、経済・環境・個人の習慣のすべてに関わっている点だ。",
      "points": [
        "ce qui... c'est que...",
        "à la fois... et..."
      ]
    },
    {
      "id": 269,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Loin de résoudre le problème, la mesure adoptée risque au contraire d'en déplacer les effets vers les populations les plus fragiles.",
      "japanese": "採用された措置は問題を解決するどころか、むしろその影響を最も弱い立場の人々へ移すおそれがある。",
      "points": [
        "loin de + 不定詞 = ～どころか",
        "au contraire"
      ]
    },
    {
      "id": 270,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Faute d'avoir anticipé la hausse de la demande, l'entreprise s'est retrouvée incapable de livrer ses clients dans les délais.",
      "japanese": "需要増を予測していなかったため、その会社は期限内に顧客へ納品できない状況に陥った。",
      "points": [
        "faute d'avoir + 過去不定詞",
        "se retrouver incapable de"
      ]
    },
    {
      "id": 271,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Pour que cette politique soit efficace, encore faut-il qu'elle soit comprise et acceptée par ceux auxquels elle s'applique.",
      "japanese": "この政策が効果を上げるには、対象となる人々に理解され、受け入れられる必要がある。",
      "points": [
        "pour que + 接続法",
        "ceux auxquels"
      ]
    },
    {
      "id": 272,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il ne suffit pas de rendre les données publiques ; il faut encore qu'elles soient présentées de manière à pouvoir être comprises par tous.",
      "japanese": "データを公開するだけでは不十分で、誰にでも理解できる形で示す必要がある。",
      "points": [
        "il ne suffit pas de",
        "de manière à + 不定詞"
      ]
    },
    {
      "id": 273,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Bien des conflits pourraient être évités si chacun prenait le temps d'expliquer ce qu'il attend réellement des autres.",
      "japanese": "各自が相手に本当に何を期待しているのか説明する時間を取れば、多くの対立は避けられるだろう。",
      "points": [
        "si + imparfait → conditionnel",
        "ce que"
      ]
    },
    {
      "id": 274,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La décision a été critiquée non pas tant pour son principe que pour la manière dont elle a été annoncée.",
      "japanese": "その決定は、内容そのものよりも、発表のされ方を理由に批判された。",
      "points": [
        "non pas tant... que... = ～というよりむしろ",
        "la manière dont"
      ]
    },
    {
      "id": 275,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À défaut de disposer de données plus récentes, nous devrons nous appuyer sur les estimations publiées l'année dernière.",
      "japanese": "より新しいデータがない以上、昨年公表された推計に頼らざるを得ない。",
      "points": [
        "à défaut de = ～がない場合",
        "s'appuyer sur"
      ]
    },
    {
      "id": 276,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Si l'on veut réduire les inégalités scolaires, il ne suffit pas d'augmenter les moyens ; encore faut-il qu'ils soient répartis là où les besoins sont les plus importants.",
      "japanese": "教育格差を減らしたいなら、予算を増やすだけでは不十分で、必要性の最も高いところに配分されなければならない。",
      "points": [
        "il ne suffit pas de",
        "encore faut-il que + 接続法"
      ]
    },
    {
      "id": 277,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Certes, cette technologie permet de gagner du temps, mais elle suppose aussi que les utilisateurs soient correctement formés.",
      "japanese": "確かにこの技術は時間の節約になるが、利用者が適切な訓練を受けていることも前提となる。",
      "points": [
        "certes..., mais...",
        "supposer que + 接続法"
      ]
    },
    {
      "id": 278,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Dans la mesure où aucune preuve définitive n'a encore été apportée, il serait prématuré d'affirmer que l'hypothèse est confirmée.",
      "japanese": "決定的な証拠がまだ示されていない以上、その仮説が確認されたと断言するのは時期尚早だろう。",
      "points": [
        "dans la mesure où = ～である以上",
        "il serait prématuré de"
      ]
    },
    {
      "id": 279,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À force de vouloir tout prévoir, on risque parfois de perdre la capacité de réagir rapidement lorsque la situation change.",
      "japanese": "すべてを予測しようとしすぎると、状況が変わったときに素早く対応する力を失うことがある。",
      "points": [
        "à force de + 不定詞",
        "risquer de"
      ]
    },
    {
      "id": 280,
      "level": "B2",
      "category": "複合的な文章",
      "french": "L'entreprise a revu sa stratégie après avoir constaté que les attentes des clients avaient évolué plus vite qu'elle ne l'avait prévu.",
      "japanese": "その企業は、顧客の期待が予想以上に速く変化していたことに気づき、戦略を見直した。",
      "points": [
        "après avoir + 過去分詞",
        "plus... que prévu"
      ]
    },
    {
      "id": 281,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Pour intéressante qu'elle soit, cette proposition ne répond pas entièrement au problème que nous cherchons à résoudre.",
      "japanese": "この提案が興味深いとしても、私たちが解決しようとしている問題に完全には応えていない。",
      "points": [
        "pour + adjectif + que + 接続法 = どれほど～でも",
        "chercher à"
      ]
    },
    {
      "id": 282,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Si l'on en croit les premières estimations, la fréquentation aurait augmenté malgré la hausse des prix.",
      "japanese": "初期の推計を信じるなら、値上げにもかかわらず利用者数は増加したとみられる。",
      "points": [
        "si l'on en croit = ～を信じるなら",
        "conditionnel passé de rumeur"
      ]
    },
    {
      "id": 283,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La difficulté ne vient pas tant du manque d'informations que de notre incapacité à distinguer celles qui sont réellement pertinentes.",
      "japanese": "難しさは情報不足というより、本当に重要な情報を見分けられないことにある。",
      "points": [
        "ne... pas tant... que...",
        "celles qui"
      ]
    },
    {
      "id": 284,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Quelle que soit la solution retenue, elle devra être suffisamment souple pour pouvoir être adaptée aux situations imprévues.",
      "japanese": "どの解決策を採用するにせよ、予期せぬ状況に対応できる十分な柔軟性が必要だ。",
      "points": [
        "quelle que soit",
        "pour pouvoir être + participe passé"
      ]
    },
    {
      "id": 285,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il a préféré ne pas intervenir immédiatement, de peur qu'une réaction trop rapide n'aggrave le conflit.",
      "japanese": "性急な反応が対立を悪化させることを懸念し、彼はすぐには介入しないことにした。",
      "points": [
        "de peur que + 接続法",
        "ne explétif"
      ]
    },
    {
      "id": 286,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La mesure, qui devait initialement être temporaire, a finalement été maintenue parce que ses effets se sont révélés plus durables que prévu.",
      "japanese": "当初は一時的なはずだった措置は、効果が予想以上に持続したため、最終的に継続された。",
      "points": [
        "relative explicative",
        "se révéler + adjectif"
      ]
    },
    {
      "id": 287,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À moins que de nouvelles données ne viennent contredire ces résultats, nous pouvons raisonnablement considérer l'hypothèse comme solide.",
      "japanese": "新たなデータがこれらの結果を否定しない限り、この仮説は十分に有力だとみなせる。",
      "points": [
        "à moins que + 接続法",
        "considérer A comme B"
      ]
    },
    {
      "id": 288,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Tout porte à croire que les habitudes de consommation continueront à évoluer, même si le rythme de ce changement reste difficile à prévoir.",
      "japanese": "消費行動は今後も変化し続けると考えられるが、その変化の速度を予測するのは依然として難しい。",
      "points": [
        "tout porte à croire que",
        "même si"
      ]
    },
    {
      "id": 289,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ce n'est qu'après plusieurs essais que l'équipe a compris d'où venait l'erreur.",
      "japanese": "チームが誤りの原因を理解したのは、何度も試した後になってからだった。",
      "points": [
        "ce n'est que... que... = ～して初めて",
        "d'où"
      ]
    },
    {
      "id": 290,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Aussi convaincante que paraisse cette explication, elle ne permet pas de rendre compte de l'ensemble des observations.",
      "japanese": "この説明がどれほど説得力を持って見えても、すべての観察結果を説明することはできない。",
      "points": [
        "aussi + adjectif + que + 接続法",
        "rendre compte de"
      ]
    },
    {
      "id": 291,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le succès du programme dépendra moins du nombre de participants que de leur capacité à appliquer ce qu'ils auront appris.",
      "japanese": "そのプログラムの成功は、参加者数よりも、学んだことを実践できるかどうかに左右される。",
      "points": [
        "moins... que...",
        "futur antérieur auront appris"
      ]
    },
    {
      "id": 292,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Alors même que les indicateurs économiques s'améliorent, une partie de la population dit ne pas en ressentir les effets.",
      "japanese": "経済指標が改善しているにもかかわらず、一部の人々はその効果を実感していないと述べている。",
      "points": [
        "alors même que = ～であるにもかかわらず",
        "en ressentir les effets"
      ]
    },
    {
      "id": 293,
      "level": "B2",
      "category": "複合的な文章",
      "french": "En admettant que les coûts restent stables, le projet ne deviendra rentable qu'au bout de plusieurs années.",
      "japanese": "費用が安定していると仮定しても、そのプロジェクトが採算に合うまでには数年かかる。",
      "points": [
        "en admettant que = ～と仮定して",
        "ne... que = ～しか"
      ]
    },
    {
      "id": 294,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Plutôt que d'imposer une règle uniforme, il serait peut-être plus efficace de laisser une certaine marge d'adaptation aux équipes locales.",
      "japanese": "一律の規則を課すより、現場のチームにある程度調整の余地を残すほうが効果的かもしれない。",
      "points": [
        "plutôt que de",
        "conditionnel d'atténuation"
      ]
    },
    {
      "id": 295,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Les chercheurs ont choisi de publier leurs données afin que d'autres équipes puissent vérifier les résultats et, le cas échéant, les reproduire.",
      "japanese": "研究者たちは、他のチームが結果を検証し、必要であれば再現できるようデータを公開することにした。",
      "points": [
        "afin que + 接続法",
        "le cas échéant = 必要な場合"
      ]
    },
    {
      "id": 296,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À peine la nouvelle avait-elle été annoncée que les réactions ont commencé à se multiplier.",
      "japanese": "その知らせが発表されるやいなや、反応が相次ぎ始めた。",
      "points": [
        "à peine... que... = ～するやいなや",
        "倒置"
      ]
    },
    {
      "id": 297,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le fait que plusieurs études aboutissent à des conclusions différentes ne signifie pas nécessairement que l'une d'elles soit fausse.",
      "japanese": "複数の研究が異なる結論に達しているからといって、そのうち一つが必ず誤りだということではない。",
      "points": [
        "le fait que",
        "ne signifie pas nécessairement que"
      ]
    },
    {
      "id": 298,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Quand bien même cette réforme produirait des résultats positifs à court terme, il resterait à savoir si ces effets peuvent durer.",
      "japanese": "たとえこの改革が短期的に良い結果を生んだとしても、その効果が持続するかどうかはなお分からない。",
      "points": [
        "quand bien même + conditionnel",
        "il resterait à savoir si"
      ]
    },
    {
      "id": 299,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La confiance se construit lentement, tandis qu'elle peut disparaître en quelques instants lorsqu'une promesse importante n'est pas tenue.",
      "japanese": "信頼はゆっくり築かれる一方、重要な約束が守られないと一瞬で失われることがある。",
      "points": [
        "tandis que = ～する一方",
        "passif n'est pas tenue"
      ]
    },
    {
      "id": 300,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Sous prétexte de simplifier la procédure, on a supprimé plusieurs étapes qui permettaient pourtant de détecter les erreurs à temps.",
      "japanese": "手続きを簡素化するという名目で、実際にはミスを早期発見するのに役立っていた複数の工程が削除された。",
      "points": [
        "sous prétexte de = ～を口実に",
        "pourtant"
      ]
    },
    {
      "id": 301,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il est d'autant plus difficile d'évaluer cette politique que ses effets ne se feront sentir que dans plusieurs années.",
      "japanese": "この政策の効果が現れるのは数年後なので、その評価はいっそう難しい。",
      "points": [
        "d'autant plus... que... = ～なのでなおさら",
        "ne... que = ～しか"
      ]
    },
    {
      "id": 302,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ceux qui s'opposent au projet craignent qu'il n'entraîne une hausse des loyers, alors que ses défenseurs mettent en avant les emplois qu'il pourrait créer.",
      "japanese": "計画に反対する人々は家賃上昇を懸念する一方、支持者はそれによって生まれる可能性のある雇用を強調している。",
      "points": [
        "craindre que + 接続法",
        "alors que"
      ]
    },
    {
      "id": 303,
      "level": "B2",
      "category": "複合的な文章",
      "french": "En dépit des progrès réalisés, il subsiste des écarts importants entre les régions, notamment en matière d'accès aux services publics.",
      "japanese": "進展があったにもかかわらず、特に公共サービスへのアクセスをめぐって地域間には大きな格差が残っている。",
      "points": [
        "en dépit de = ～にもかかわらず",
        "en matière de"
      ]
    },
    {
      "id": 304,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Dès lors que les objectifs ont été clairement définis, il devient plus facile de déterminer quels moyens doivent être mobilisés.",
      "japanese": "目標が明確に定められれば、どの手段を投入すべきか判断しやすくなる。",
      "points": [
        "dès lors que = ～である以上",
        "interrogative indirecte"
      ]
    },
    {
      "id": 305,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Encore que cette interprétation soit plausible, elle demande à être confirmée par des données indépendantes.",
      "japanese": "この解釈はもっともらしいとはいえ、独立したデータによる確認が必要だ。",
      "points": [
        "encore que + 接続法 = ～とはいえ",
        "demander à être + participe passé"
      ]
    },
    {
      "id": 306,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le nombre de visiteurs a augmenté, ce dont se félicite la direction, même si cette hausse reste inférieure aux prévisions.",
      "japanese": "来館者数は増加し、経営側はそれを歓迎しているが、その伸びは予想を下回っている。",
      "points": [
        "ce dont",
        "même si"
      ]
    },
    {
      "id": 307,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Si chacun attend que l'autre fasse le premier pas, il y a peu de chances que la négociation avance réellement.",
      "japanese": "双方が相手の出方を待っているだけでは、交渉が本当に進展する可能性は低い。",
      "points": [
        "il y a peu de chances que + 接続法",
        "si + présent"
      ]
    },
    {
      "id": 308,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La question n'est plus de savoir s'il faut agir, mais de déterminer quelles mesures peuvent produire des effets sans créer de nouveaux problèmes.",
      "japanese": "もはや行動すべきかが問題なのではなく、新たな問題を生まずに効果を上げられる措置を見極めることが課題だ。",
      "points": [
        "ne... plus de savoir si",
        "mais de déterminer"
      ]
    },
    {
      "id": 309,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À peine avait-il commencé son exposé qu'une panne de courant a interrompu la présentation.",
      "japanese": "彼が発表を始めた直後、停電によってプレゼンが中断された。",
      "points": [
        "à peine... que...",
        "倒置"
      ]
    },
    {
      "id": 310,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il serait tentant d'attribuer cette amélioration à une seule mesure, mais plusieurs facteurs semblent avoir joué simultanément.",
      "japanese": "この改善を一つの施策だけの成果と考えたくなるが、複数の要因が同時に作用したようだ。",
      "points": [
        "il serait tentant de",
        "sembler avoir + participe passé"
      ]
    },
    {
      "id": 311,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Qu'il s'agisse de logement, de transport ou d'éducation, les mêmes inégalités territoriales réapparaissent.",
      "japanese": "住宅・交通・教育のいずれであっても、同じ地域格差が繰り返し現れる。",
      "points": [
        "qu'il s'agisse de = ～であれ",
        "接続法"
      ]
    },
    {
      "id": 312,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le projet ne pourra aboutir que si les différents partenaires acceptent de partager à la fois les coûts et les responsabilités.",
      "japanese": "各パートナーが費用と責任の両方を分担することに同意しなければ、プロジェクトは成功しない。",
      "points": [
        "ne... que si = ～の場合にしか",
        "à la fois... et..."
      ]
    },
    {
      "id": 313,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Pour autant que nous le sachions, aucun incident similaire n'avait été signalé auparavant.",
      "japanese": "私たちの知る限り、同様の事故はそれ以前には報告されていなかった。",
      "points": [
        "pour autant que = ～する限り",
        "plus-que-parfait passif"
      ]
    },
    {
      "id": 314,
      "level": "B2",
      "category": "複合的な文章",
      "french": "L'objectif consiste moins à supprimer tous les risques qu'à faire en sorte qu'ils restent acceptables.",
      "japanese": "目標はすべてのリスクをなくすことよりも、それを許容可能な範囲に抑えることにある。",
      "points": [
        "moins... que...",
        "faire en sorte que + 接続法"
      ]
    },
    {
      "id": 315,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Une fois que les données auront été vérifiées, nous pourrons comparer les résultats avec ceux obtenus l'année précédente.",
      "japanese": "データの確認が済めば、前年に得られた結果と比較できる。",
      "points": [
        "une fois que + futur antérieur",
        "ceux obtenus"
      ]
    },
    {
      "id": 316,
      "level": "B2",
      "category": "複合的な文章",
      "french": "S'il est vrai que cette mesure a réduit les coûts, elle a également entraîné une charge de travail supplémentaire pour certaines équipes.",
      "japanese": "この措置がコストを削減したのは事実だが、一部のチームには追加の負担も生じた。",
      "points": [
        "s'il est vrai que = 確かに～だが",
        "également"
      ]
    },
    {
      "id": 317,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La décision aurait sans doute été différente si les responsables avaient disposé des informations que nous avons aujourd'hui.",
      "japanese": "責任者たちが現在私たちの持つ情報を当時持っていたなら、決定はおそらく異なっていただろう。",
      "points": [
        "conditionnel passé",
        "si + plus-que-parfait"
      ]
    },
    {
      "id": 318,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Aussi longtemps que les causes du problème resteront mal comprises, toute solution risque de n'être que provisoire.",
      "japanese": "問題の原因が十分に理解されない限り、どの解決策も一時的なものにとどまるおそれがある。",
      "points": [
        "aussi longtemps que = ～する限り",
        "ne... que"
      ]
    },
    {
      "id": 319,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Loin d'être unanimement acceptée, la réforme continue de susciter des critiques, y compris parmi ceux qui en soutenaient le principe.",
      "japanese": "その改革は全員に受け入れられているどころか、理念を支持していた人々の間でさえ批判を呼び続けている。",
      "points": [
        "loin de + infinitif",
        "y compris = ～を含めて"
      ]
    },
    {
      "id": 320,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Si les chiffres semblent encourageants, il convient néanmoins de rappeler qu'ils ne couvrent qu'une période relativement courte.",
      "japanese": "数字は好ましく見えるものの、比較的短い期間しか対象としていないことは忘れてはならない。",
      "points": [
        "si + indicatif concessif",
        "il convient de"
      ]
    },
    {
      "id": 321,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La rapidité avec laquelle l'information circule aujourd'hui rend d'autant plus nécessaire la vérification des sources.",
      "japanese": "今日では情報が非常に速く拡散するため、情報源の確認がこれまで以上に必要になっている。",
      "points": [
        "avec laquelle",
        "d'autant plus"
      ]
    },
    {
      "id": 322,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ce n'est qu'en comparant plusieurs sources que l'on peut se faire une idée relativement fiable de la situation.",
      "japanese": "複数の情報源を比較して初めて、状況について比較的信頼できる見方を持てる。",
      "points": [
        "ce n'est qu'en... que...",
        "se faire une idée"
      ]
    },
    {
      "id": 323,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il a choisi de ne pas répondre immédiatement, afin d'éviter que ses propos ne soient interprétés hors contexte.",
      "japanese": "彼は自分の発言が文脈を離れて解釈されるのを避けるため、すぐには返答しないことにした。",
      "points": [
        "afin d'éviter que + 接続法",
        "ne explétif"
      ]
    },
    {
      "id": 324,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Même en supposant que la croissance se poursuive au même rythme, il faudra plusieurs années pour retrouver le niveau d'avant la crise.",
      "japanese": "成長が同じペースで続くと仮定しても、危機前の水準に戻るには数年かかる。",
      "points": [
        "même en supposant que + 接続法",
        "il faudra"
      ]
    },
    {
      "id": 325,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La solution retenue présente l'avantage d'être simple à mettre en œuvre, encore qu'elle ne règle pas toutes les difficultés.",
      "japanese": "採用された解決策には実施が容易という利点があるが、すべての問題を解決するわけではない。",
      "points": [
        "présenter l'avantage de",
        "encore que + 接続法"
      ]
    },
    {
      "id": 326,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Dans l'hypothèse où les négociations échoueraient, il faudrait prévoir une solution de remplacement afin d'éviter toute interruption du service.",
      "japanese": "交渉が決裂する場合に備え、サービスの中断を避けるための代替案を用意する必要がある。",
      "points": [
        "dans l'hypothèse où + conditionnel",
        "afin de + 不定詞"
      ]
    },
    {
      "id": 327,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ce n'est pas tant la quantité d'informations qui pose problème que la difficulté à déterminer lesquelles sont fiables.",
      "japanese": "問題なのは情報量そのものというより、どれが信頼できるか判断する難しさだ。",
      "points": [
        "ce n'est pas tant... que...",
        "lesquelles"
      ]
    },
    {
      "id": 328,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Aussi nécessaire soit-elle, une réforme ne peut produire d'effets durables si ceux qui doivent l'appliquer n'y adhèrent pas.",
      "japanese": "どれほど必要な改革であっても、実施する側が賛同しなければ持続的な効果は生まれない。",
      "points": [
        "aussi + adjectif + soit-elle",
        "adhérer à → y adhérer"
      ]
    },
    {
      "id": 329,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il faudra sans doute revoir certaines priorités, quitte à reporter des projets moins urgents à l'année prochaine.",
      "japanese": "緊急性の低い計画を来年に延期することになっても、いくつかの優先事項を見直す必要があるだろう。",
      "points": [
        "quitte à + 不定詞 = ～することになっても",
        "sans doute"
      ]
    },
    {
      "id": 330,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Pour peu que l'on prenne le temps de comparer les offres, il est possible de réduire sensiblement le coût total.",
      "japanese": "時間をかけて提案を比較しさえすれば、総費用をかなり抑えることができる。",
      "points": [
        "pour peu que + 接続法",
        "sensiblement"
      ]
    },
    {
      "id": 331,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ce qui semblait n'être qu'un incident isolé s'est révélé être le symptôme d'un problème beaucoup plus général.",
      "japanese": "単発の出来事にすぎないと思われたものが、はるかに広範な問題の兆候だと判明した。",
      "points": [
        "ce qui",
        "se révéler être"
      ]
    },
    {
      "id": 332,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À partir du moment où chacun dispose des mêmes informations, il devient plus facile de discuter sur une base commune.",
      "japanese": "全員が同じ情報を持てば、共通の前提に立って話し合いやすくなる。",
      "points": [
        "à partir du moment où = ～した時点から／～である以上",
        "disposer de"
      ]
    },
    {
      "id": 333,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Faute de pouvoir mesurer directement le phénomène, les chercheurs ont dû recourir à plusieurs indicateurs indirects.",
      "japanese": "その現象を直接測定できなかったため、研究者たちは複数の間接指標を用いざるを得なかった。",
      "points": [
        "faute de pouvoir + 不定詞",
        "recourir à"
      ]
    },
    {
      "id": 334,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Même si cette explication est séduisante, rien ne garantit qu'elle reste valable dans un contexte différent.",
      "japanese": "この説明は魅力的ではあるが、異なる状況でも妥当である保証はない。",
      "points": [
        "rien ne garantit que",
        "même si"
      ]
    },
    {
      "id": 335,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Au cas où vous rencontreriez un problème pendant l'installation, vous trouverez une procédure détaillée à la fin du document.",
      "japanese": "インストール中に問題が起きた場合に備え、文書の末尾に詳しい手順が載っている。",
      "points": [
        "au cas où + conditionnel",
        "rencontrer un problème"
      ]
    },
    {
      "id": 336,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le débat est loin d'être clos, dans la mesure où plusieurs questions essentielles restent sans réponse.",
      "japanese": "いくつかの重要な問いが未解決である以上、議論はまだ終わったとは到底言えない。",
      "points": [
        "être loin de + 不定詞",
        "dans la mesure où"
      ]
    },
    {
      "id": 337,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À vouloir aller trop vite, on finit parfois par négliger des détails qui se révèlent essentiels par la suite.",
      "japanese": "急ぎすぎると、後になって重要だと分かる細部を見落としてしまうことがある。",
      "points": [
        "à + 不定詞で原因・条件",
        "finir par"
      ]
    },
    {
      "id": 338,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le rapport souligne que, si les tendances actuelles se poursuivent, certaines régions pourraient être confrontées à une pénurie de main-d'œuvre.",
      "japanese": "報告書は、現在の傾向が続けば、一部地域が人手不足に直面する可能性があると指摘している。",
      "points": [
        "si + présent → conditionnel de possibilité",
        "être confronté à"
      ]
    },
    {
      "id": 339,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Ce n'est qu'une fois les responsabilités clairement définies que la coopération pourra devenir réellement efficace.",
      "japanese": "責任が明確に定められて初めて、協力は本当に効果的になり得る。",
      "points": [
        "ce n'est qu'une fois... que...",
        "futur"
      ]
    },
    {
      "id": 340,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Si impressionnants que soient les progrès accomplis, ils ne doivent pas faire oublier les difficultés qui restent à résoudre.",
      "japanese": "達成された進歩がどれほど目覚ましくても、残された課題を忘れてはならない。",
      "points": [
        "si + adjectif + que + 接続法",
        "faire oublier"
      ]
    },
    {
      "id": 341,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La décision a été prise dans l'urgence, si bien que plusieurs conséquences n'ont pas été suffisamment anticipées.",
      "japanese": "その決定は緊急に下されたため、いくつかの影響が十分に予測されなかった。",
      "points": [
        "si bien que = その結果",
        "passif"
      ]
    },
    {
      "id": 342,
      "level": "B2",
      "category": "複合的な文章",
      "french": "À en juger par les réactions recueillies jusqu'ici, la mesure semble avoir été mieux acceptée que prévu.",
      "japanese": "これまで寄せられた反応から判断すると、その措置は予想以上に受け入れられたようだ。",
      "points": [
        "à en juger par = ～から判断すると",
        "sembler avoir été"
      ]
    },
    {
      "id": 343,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Quoi qu'on puisse penser de cette stratégie, elle a au moins le mérite de poser clairement les priorités.",
      "japanese": "この戦略をどう評価するにせよ、少なくとも優先順位を明確に示している点は評価できる。",
      "points": [
        "quoi qu'on puisse penser de",
        "avoir le mérite de"
      ]
    },
    {
      "id": 344,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Alors que la première étude cherchait surtout à décrire le phénomène, la seconde tente d'en expliquer les causes.",
      "japanese": "最初の研究が主に現象の記述を目的としていたのに対し、2つ目はその原因を説明しようとしている。",
      "points": [
        "alors que = 対比",
        "en expliquer les causes"
      ]
    },
    {
      "id": 345,
      "level": "B2",
      "category": "複合的な文章",
      "french": "La proposition mérite d'être examinée, ne serait-ce que parce qu'elle offre une perspective différente de celles envisagées jusqu'ici.",
      "japanese": "その提案は、これまで検討されてきたものとは異なる視点を示すというだけでも、検討する価値がある。",
      "points": [
        "ne serait-ce que parce que = ～というだけでも",
        "celles"
      ]
    },
    {
      "id": 346,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Si nous avions disposé de ces informations plus tôt, nous aurions pu éviter plusieurs erreurs dont les conséquences se font encore sentir aujourd'hui.",
      "japanese": "この情報をもっと早く得ていれば、今なお影響が残るいくつかの誤りを避けられただろう。",
      "points": [
        "si + plus-que-parfait → conditionnel passé",
        "dont"
      ]
    },
    {
      "id": 347,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Il est possible que la mesure produise des effets différents selon les régions, raison pour laquelle une évaluation locale sera indispensable.",
      "japanese": "その措置は地域によって異なる効果を生む可能性があり、そのため地域ごとの評価が不可欠になる。",
      "points": [
        "il est possible que + 接続法",
        "raison pour laquelle"
      ]
    },
    {
      "id": 348,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Le problème est d'autant plus urgent qu'il risque de s'aggraver si aucune mesure n'est prise dans les prochains mois.",
      "japanese": "今後数か月のうちに何の対策も取られなければ悪化するおそれがあるため、その問題はいっそう緊急性が高い。",
      "points": [
        "d'autant plus... que...",
        "si + présent"
      ]
    },
    {
      "id": 349,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Sans nier les avantages de cette approche, il convient d'en reconnaître aussi les limites.",
      "japanese": "この方法の利点を否定することなく、その限界も認める必要がある。",
      "points": [
        "sans + 不定詞",
        "en reconnaître les limites"
      ]
    },
    {
      "id": 350,
      "level": "B2",
      "category": "複合的な文章",
      "french": "Encore faut-il distinguer ce qui relève d'une tendance de fond de ce qui n'est qu'une fluctuation passagère.",
      "japanese": "さらに、長期的な傾向に当たるものと、一時的な変動にすぎないものを区別する必要がある。",
      "points": [
        "encore faut-il + 不定詞",
        "ce qui... de ce qui..."
      ]
    }
  ]
};
const B2_QUESTIONS = B2_DATASET.questions;
