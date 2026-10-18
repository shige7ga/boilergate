import type { Subject } from '../types/content'

// MVP用の仮教材。IDは並び順やタイトルから生成せず、固定値で管理する。
export const subjects: Subject[] = [
  {
    "id": "boiler-structure",
    "title": "ボイラーの構造に関する知識",
    "description": "役割と仕組みから、ボイラーの基礎を学びます。",
    "sections": [
      {
        "id": "boiler-basics",
        "title": "ボイラーの基礎",
        "description": "役割・熱の伝わり方・主な構成部分を、3つのレッスンで学びます。",
        "lessons": [
          {
            "id": "boiler-role",
            "title": "ボイラーの役割",
            "description": "水を温めて熱を届ける仕組みを知りましょう。",
            "estimatedMinutes": 5,
            "slides": [
              {
                "id": "boiler-role-purpose",
                "title": "ボイラーとは",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "ボイラーは燃料などの熱を使って水を温め、蒸気や温水をつくる装置です。"
                  },
                  {
                    "type": "paragraph",
                    "text": "まずは「熱をつくる」「水へ伝える」「利用先へ届ける」という流れに注目しましょう。細かな部品名を覚える前に、装置全体で何をしているかをつかむことが、このレッスンの目標です。"
                  }
                ]
              },
              {
                "id": "boiler-role-steam",
                "title": "蒸気とは",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "水が熱を受けて気体になったものを蒸気と呼びます。"
                  }
                ]
              },
              {
                "id": "boiler-role-use",
                "title": "熱の使い道",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "つくった蒸気や温水は、工場の加熱や建物の暖房などに利用されます。"
                  },
                  {
                    "type": "list",
                    "items": [
                      "工場で材料を温める",
                      "建物の暖房に使う",
                      "温水として熱を届ける"
                    ]
                  }
                ]
              },
              {
                "id": "boiler-role-flow",
                "title": "熱を届ける流れ",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "熱源から水へ熱を伝え、蒸気や温水として利用先へ届けます。"
                  }
                ],
                "diagramPlaceholder": "熱源 → 水を温める → 蒸気・温水 → 利用先"
              }
            ],
            "practiceQuestions": [
              {
                "id": "boiler-role-practice-purpose",
                "type": "choice",
                "lessonId": "boiler-role",
                "slideId": "boiler-role-purpose",
                "prompt": "ボイラーの主な役割はどれですか？",
                "choices": [
                  {
                    "id": "boiler-role-practice-purpose-a",
                    "text": "蒸気や温水をつくる"
                  },
                  {
                    "id": "boiler-role-practice-purpose-b",
                    "text": "水を凍らせる"
                  },
                  {
                    "id": "boiler-role-practice-purpose-c",
                    "text": "空気を冷やす"
                  },
                  {
                    "id": "boiler-role-practice-purpose-d",
                    "text": "電気をためる"
                  }
                ],
                "correctChoiceId": "boiler-role-practice-purpose-a",
                "explanation": "ボイラーは燃料などの熱を使って水を温め、蒸気や温水をつくる装置です。"
              },
              {
                "id": "boiler-role-practice-steam",
                "type": "choice",
                "lessonId": "boiler-role",
                "slideId": "boiler-role-steam",
                "prompt": "水が気体になったものを何と呼びますか？",
                "choices": [
                  {
                    "id": "boiler-role-practice-steam-a",
                    "text": "蒸気"
                  },
                  {
                    "id": "boiler-role-practice-steam-b",
                    "text": "氷"
                  },
                  {
                    "id": "boiler-role-practice-steam-c",
                    "text": "灰"
                  },
                  {
                    "id": "boiler-role-practice-steam-d",
                    "text": "燃料"
                  }
                ],
                "correctChoiceId": "boiler-role-practice-steam-a",
                "explanation": "水が熱を受けて気体になったものを蒸気と呼びます。"
              }
            ]
          },
          {
            "id": "heat-transfer",
            "title": "熱の伝わり方",
            "description": "伝導・対流・放射の基本を学びましょう。",
            "estimatedMinutes": 5,
            "slides": [
              {
                "id": "heat-transfer-overview",
                "title": "熱の伝わり方は3つ",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "熱の伝わり方には、伝導・対流・放射があります。"
                  }
                ]
              },
              {
                "id": "heat-transfer-conduction",
                "title": "伝導",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "伝導は、物体の内部などで熱が高温側から低温側へ伝わる現象です。金属の棒の端を温める例で考えられます。"
                  }
                ]
              },
              {
                "id": "heat-transfer-convection",
                "title": "対流",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "対流は、水や空気などの流れによって熱が運ばれる現象です。鍋の水が温まるときにも起こります。"
                  }
                ]
              },
              {
                "id": "heat-transfer-radiation",
                "title": "放射",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "放射は、電磁波によって熱が伝わる現象です。離れた火から暖かさを感じる例で考えられます。"
                  }
                ]
              }
            ],
            "practiceQuestions": [
              {
                "id": "heat-transfer-practice-conduction",
                "type": "choice",
                "lessonId": "heat-transfer",
                "slideId": "heat-transfer-conduction",
                "prompt": "金属の棒の内部を熱が伝わる現象はどれですか？",
                "choices": [
                  {
                    "id": "heat-transfer-practice-conduction-a",
                    "text": "伝導"
                  },
                  {
                    "id": "heat-transfer-practice-conduction-b",
                    "text": "対流"
                  },
                  {
                    "id": "heat-transfer-practice-conduction-c",
                    "text": "放射"
                  },
                  {
                    "id": "heat-transfer-practice-conduction-d",
                    "text": "蒸発"
                  }
                ],
                "correctChoiceId": "heat-transfer-practice-conduction-a",
                "explanation": "伝導は、物体の内部などで熱が高温側から低温側へ伝わる現象です。金属の棒の端を温める例で考えられます。"
              },
              {
                "id": "heat-transfer-practice-convection",
                "type": "choice",
                "lessonId": "heat-transfer",
                "slideId": "heat-transfer-convection",
                "prompt": "水や空気の流れで熱が運ばれる現象はどれですか？",
                "choices": [
                  {
                    "id": "heat-transfer-practice-convection-a",
                    "text": "対流"
                  },
                  {
                    "id": "heat-transfer-practice-convection-b",
                    "text": "伝導"
                  },
                  {
                    "id": "heat-transfer-practice-convection-c",
                    "text": "放射"
                  },
                  {
                    "id": "heat-transfer-practice-convection-d",
                    "text": "凝固"
                  }
                ],
                "correctChoiceId": "heat-transfer-practice-convection-a",
                "explanation": "対流は、水や空気などの流れによって熱が運ばれる現象です。鍋の水が温まるときにも起こります。"
              }
            ]
          },
          {
            "id": "boiler-parts",
            "title": "主な構成部分",
            "description": "熱をつくり、水に伝える部分を見てみましょう。",
            "estimatedMinutes": 5,
            "slides": [
              {
                "id": "boiler-parts-overview",
                "title": "構成部分のつながり",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "ボイラーでは、燃焼で生じた熱を伝熱面を通して水に伝えます。"
                  }
                ]
              },
              {
                "id": "boiler-parts-furnace",
                "title": "燃焼室",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "燃焼室は、燃料を燃やして熱を発生させる空間です。"
                  }
                ]
              },
              {
                "id": "boiler-parts-surface",
                "title": "伝熱面",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "伝熱面は、高温の燃焼ガスなどから水へ熱を伝える面です。"
                  }
                ]
              },
              {
                "id": "boiler-parts-path",
                "title": "燃焼ガスの通り道",
                "body": [
                  {
                    "type": "paragraph",
                    "text": "燃焼ガスは伝熱面に熱を伝えながら通り道を進み、排出されます。"
                  }
                ]
              }
            ],
            "practiceQuestions": [
              {
                "id": "boiler-parts-practice-furnace",
                "type": "choice",
                "lessonId": "boiler-parts",
                "slideId": "boiler-parts-furnace",
                "prompt": "燃料を燃やす空間を何と呼びますか？",
                "choices": [
                  {
                    "id": "boiler-parts-practice-furnace-a",
                    "text": "燃焼室"
                  },
                  {
                    "id": "boiler-parts-practice-furnace-b",
                    "text": "伝熱面"
                  },
                  {
                    "id": "boiler-parts-practice-furnace-c",
                    "text": "温水"
                  },
                  {
                    "id": "boiler-parts-practice-furnace-d",
                    "text": "蒸気"
                  }
                ],
                "correctChoiceId": "boiler-parts-practice-furnace-a",
                "explanation": "燃焼室は、燃料を燃やして熱を発生させる空間です。"
              },
              {
                "id": "boiler-parts-practice-surface",
                "type": "choice",
                "lessonId": "boiler-parts",
                "slideId": "boiler-parts-surface",
                "prompt": "水に熱を伝える面を何と呼びますか？",
                "choices": [
                  {
                    "id": "boiler-parts-practice-surface-a",
                    "text": "伝熱面"
                  },
                  {
                    "id": "boiler-parts-practice-surface-b",
                    "text": "燃焼室"
                  },
                  {
                    "id": "boiler-parts-practice-surface-c",
                    "text": "煙突"
                  },
                  {
                    "id": "boiler-parts-practice-surface-d",
                    "text": "燃料"
                  }
                ],
                "correctChoiceId": "boiler-parts-practice-surface-a",
                "explanation": "伝熱面は、高温の燃焼ガスなどから水へ熱を伝える面です。"
              }
            ]
          }
        ],
        "testQuestions": [
          {
            "id": "boiler-role-test-purpose",
            "type": "choice",
            "lessonId": "boiler-role",
            "slideId": "boiler-role-purpose",
            "prompt": "ボイラーの主な役割はどれですか？",
            "choices": [
              {
                "id": "boiler-role-test-purpose-a",
                "text": "蒸気や温水をつくる"
              },
              {
                "id": "boiler-role-test-purpose-b",
                "text": "水を凍らせる"
              },
              {
                "id": "boiler-role-test-purpose-c",
                "text": "空気を冷やす"
              },
              {
                "id": "boiler-role-test-purpose-d",
                "text": "電気をためる"
              }
            ],
            "correctChoiceId": "boiler-role-test-purpose-a",
            "explanation": "ボイラーは燃料などの熱を使って水を温め、蒸気や温水をつくる装置です。"
          },
          {
            "id": "boiler-role-test-steam",
            "type": "choice",
            "lessonId": "boiler-role",
            "slideId": "boiler-role-steam",
            "prompt": "水が気体になったものを何と呼びますか？",
            "choices": [
              {
                "id": "boiler-role-test-steam-a",
                "text": "蒸気"
              },
              {
                "id": "boiler-role-test-steam-b",
                "text": "氷"
              },
              {
                "id": "boiler-role-test-steam-c",
                "text": "灰"
              },
              {
                "id": "boiler-role-test-steam-d",
                "text": "燃料"
              }
            ],
            "correctChoiceId": "boiler-role-test-steam-a",
            "explanation": "水が熱を受けて気体になったものを蒸気と呼びます。"
          },
          {
            "id": "heat-transfer-test-conduction",
            "type": "choice",
            "lessonId": "heat-transfer",
            "slideId": "heat-transfer-conduction",
            "prompt": "金属の棒の内部を熱が伝わる現象はどれですか？",
            "choices": [
              {
                "id": "heat-transfer-test-conduction-a",
                "text": "伝導"
              },
              {
                "id": "heat-transfer-test-conduction-b",
                "text": "対流"
              },
              {
                "id": "heat-transfer-test-conduction-c",
                "text": "放射"
              },
              {
                "id": "heat-transfer-test-conduction-d",
                "text": "蒸発"
              }
            ],
            "correctChoiceId": "heat-transfer-test-conduction-a",
            "explanation": "伝導は、物体の内部などで熱が高温側から低温側へ伝わる現象です。金属の棒の端を温める例で考えられます。"
          },
          {
            "id": "heat-transfer-test-convection",
            "type": "choice",
            "lessonId": "heat-transfer",
            "slideId": "heat-transfer-convection",
            "prompt": "水や空気の流れで熱が運ばれる現象はどれですか？",
            "choices": [
              {
                "id": "heat-transfer-test-convection-a",
                "text": "対流"
              },
              {
                "id": "heat-transfer-test-convection-b",
                "text": "伝導"
              },
              {
                "id": "heat-transfer-test-convection-c",
                "text": "放射"
              },
              {
                "id": "heat-transfer-test-convection-d",
                "text": "凝固"
              }
            ],
            "correctChoiceId": "heat-transfer-test-convection-a",
            "explanation": "対流は、水や空気などの流れによって熱が運ばれる現象です。鍋の水が温まるときにも起こります。"
          },
          {
            "id": "boiler-parts-test-furnace",
            "type": "choice",
            "lessonId": "boiler-parts",
            "slideId": "boiler-parts-furnace",
            "prompt": "燃料を燃やす空間を何と呼びますか？",
            "choices": [
              {
                "id": "boiler-parts-test-furnace-a",
                "text": "燃焼室"
              },
              {
                "id": "boiler-parts-test-furnace-b",
                "text": "伝熱面"
              },
              {
                "id": "boiler-parts-test-furnace-c",
                "text": "温水"
              },
              {
                "id": "boiler-parts-test-furnace-d",
                "text": "蒸気"
              }
            ],
            "correctChoiceId": "boiler-parts-test-furnace-a",
            "explanation": "燃焼室は、燃料を燃やして熱を発生させる空間です。"
          },
          {
            "id": "boiler-parts-test-surface",
            "type": "choice",
            "lessonId": "boiler-parts",
            "slideId": "boiler-parts-surface",
            "prompt": "水に熱を伝える面を何と呼びますか？",
            "choices": [
              {
                "id": "boiler-parts-test-surface-a",
                "text": "伝熱面"
              },
              {
                "id": "boiler-parts-test-surface-b",
                "text": "燃焼室"
              },
              {
                "id": "boiler-parts-test-surface-c",
                "text": "煙突"
              },
              {
                "id": "boiler-parts-test-surface-d",
                "text": "燃料"
              }
            ],
            "correctChoiceId": "boiler-parts-test-surface-a",
            "explanation": "伝熱面は、高温の燃焼ガスなどから水へ熱を伝える面です。"
          }
        ]
      }
    ]
  }
]
