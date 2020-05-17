export const rule = Object.freeze({
    "trigger": {
      "name": "or name",
      "operator": "OR",
      "terms": [
        {
          "name": "AND name 2",
          "operator": "AND",
          "terms": [
            {
              "name": "AND name 2",
              "operator": "AND",
              "terms": [
                {
                  "name": "AND name 2",
                  "operator": "AND",
                  "terms": [
                    {
                      "name": "or name",
                      "operator": "OR",
                      "terms": [
                        {
                          "name": "in name",
                          "operator": "IN",
                          "type": "CPT",
                          "values": [
                            "1",
                            "2"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "NOT name",
                      "operator": "NOT",
                      "term": {
                        "name": "in name",
                        "operator": "IN",
                        "type": "CPT",
                        "values": [
                          "1",
                          "2"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "or name",
                  "operator": "OR",
                  "terms": [
                    {
                      "name": "in name",
                      "operator": "IN",
                      "type": "CPT",
                      "values": [
                        "1",
                        "2"
                      ]
                    }
                  ]
                },
                {
                  "name": "NOT name",
                  "operator": "NOT",
                  "term": {
                    "name": "in name",
                    "operator": "IN",
                    "type": "CPT",
                    "values": [
                      "1",
                      "2"
                    ]
                  }
                }
              ]
            },
            {
              "name": "or name",
              "operator": "OR",
              "terms": [
                {
                  "name": "in name",
                  "operator": "IN",
                  "type": "CPT",
                  "values": [
                    "1",
                    "2"
                  ]
                }
              ]
            },
            {
              "name": "NOT name",
              "operator": "NOT",
              "term": {
                "name": "in name",
                "operator": "IN",
                "type": "CPT",
                "values": [
                  "1",
                  "2"
                ]
              }
            }
          ]
        },
        {
          "name": "or name",
          "operator": "OR",
          "terms": [
            {
              "name": "in name",
              "operator": "IN",
              "type": "CPT",
              "values": [
                "1",
                "2"
              ]
            }
          ]
        },
        {
          "name": "AND name",
          "operator": "AND",
          "terms": [
            {
              "name": "AND name 2",
              "operator": "AND",
              "terms": [
                {
                  "name": "or name",
                  "operator": "OR",
                  "terms": [
                    {
                      "name": "in name",
                      "operator": "IN",
                      "type": "CPT",
                      "values": [
                        "1",
                        "2"
                      ]
                    }
                  ]
                },
                {
                  "name": "NOT name",
                  "operator": "NOT",
                  "term": {
                    "name": "in name",
                    "operator": "IN",
                    "type": "CPT",
                    "values": [
                      "1",
                      "2"
                    ]
                  }
                }
              ]
            },
            {
              "name": "or name",
              "operator": "OR",
              "terms": [
                {
                  "name": "in name",
                  "operator": "IN",
                  "type": "CPT",
                  "values": [
                    "1",
                    "2"
                  ]
                }
              ]
            },
            {
              "name": "NOT name",
              "operator": "NOT",
              "term": {
                "name": "in name",
                "operator": "IN",
                "type": "CPT",
                "values": [
                  "1",
                  "2"
                ]
              }
            },
            {
              "name": "false name",
              "operator": "FALSE"
            },
            {
              "name": "true name",
              "operator": "TRUE"
            },
            {
              "name": "in name",
              "operator": "EQUALS",
              "type": "CPT",
              "value": "1"
            },
            {
              "name": "in name",
              "operator": "GREATERTHAN",
              "type": "CPT",
              "value": "1"
            },
            {
              "name": "in name",
              "operator": "GREATERTHANEQUALS",
              "type": "CPT",
              "value": "1"
            },
            {
              "name": "in name",
              "operator": "LESSTHAN",
              "type": "CPT",
              "value": "1"
            },
            {
              "name": "in name",
              "operator": "LESSTHANEQUALS",
              "type": "CPT",
              "value": "1"
            },
            {
              "name": "in name",
              "operator": "LESSTHANEQUALS",
              "type": "CPT",
              "value": "1"
            },
            {
              "name": "in name",
              "operator": "BETWEEN",
              "type": "CPT",
              "endValue": "10",
              "startValue": "1"
            },
            {
              "name": "FIRST name",
              "operator": "FIRST"
            }
          ]
        }
      ]
    }
  });