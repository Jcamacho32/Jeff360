var APP_DATA = {
  "scenes": [
    {
      "id": "0-laundry-room",
      "name": "Laundry Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.522164138554955,
          "pitch": 0.05431732735800665,
          "rotation": 0,
          "target": "9-laundryroombedroom"
        },
        {
          "yaw": 1.8354518650795608,
          "pitch": 0.13271155712792115,
          "rotation": 0,
          "target": "14-livingroomdining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08860729827525482,
          "pitch": 0.051778217928230674,
          "rotation": 0,
          "target": "11-sittingroom"
        },
        {
          "yaw": -0.2181288159364989,
          "pitch": 0.1350135309917011,
          "rotation": 0,
          "target": "5-top-stairs"
        },
        {
          "yaw": 0.7383598452288069,
          "pitch": -0.07234937558490984,
          "rotation": 0,
          "target": "7-diningroom"
        },
        {
          "yaw": -2.2782400827956515,
          "pitch": -0.06401654226355546,
          "rotation": 0,
          "target": "14-livingroomdining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-loft",
      "name": "Loft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22276868140717454,
          "pitch": 0.030042829815709382,
          "rotation": 0,
          "target": "3-bedroom-loftadj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-loftadj",
      "name": "Bedroom-LoftAdj",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.890107101738259,
          "pitch": 0.10917111486182662,
          "rotation": 0,
          "target": "2-loft"
        },
        {
          "yaw": 0.9622961845205875,
          "pitch": 0.1390808250080937,
          "rotation": 0,
          "target": "5-top-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-top-stairs-bedroom",
      "name": "Top Stairs Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.831397139645601,
          "pitch": 0.12842556534609884,
          "rotation": 0,
          "target": "5-top-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-top-stairs",
      "name": "Top Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32609055351433724,
          "pitch": 0.1702272143393575,
          "rotation": 0,
          "target": "4-top-stairs-bedroom"
        },
        {
          "yaw": -2.4138978146333265,
          "pitch": 0.15503334140924707,
          "rotation": 0,
          "target": "3-bedroom-loftadj"
        },
        {
          "yaw": 1.6568005942434283,
          "pitch": 0.07031402669592524,
          "rotation": 0,
          "target": "6-scullery-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-scullery-bedroom",
      "name": "Scullery Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8871828023094075,
          "pitch": 0.10103243138106421,
          "rotation": 0,
          "target": "5-top-stairs"
        },
        {
          "yaw": -2.2260331127902795,
          "pitch": -0.04698052749620274,
          "rotation": 0,
          "target": "15-scullarybath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-diningroom",
      "name": "DiningRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.909899477173223,
          "pitch": 0.03602556261365031,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.6256472938602897,
          "pitch": 0.02985114718485704,
          "rotation": 0,
          "target": "5-top-stairs"
        },
        {
          "yaw": 2.9896206782320682,
          "pitch": -0.060795834897838574,
          "rotation": 0,
          "target": "8-diningroombedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-diningroombedroom",
      "name": "DiningRoomBedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.349328614319594,
          "pitch": -0.0009359900495020668,
          "rotation": 0,
          "target": "7-diningroom"
        },
        {
          "yaw": 1.5467743157351936,
          "pitch": -0.013995701358098245,
          "rotation": 0,
          "target": "16-jackjillbath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-laundryroombedroom",
      "name": "LaundryRoomBedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17417167324272853,
          "pitch": 0.032480876133922365,
          "rotation": 0,
          "target": "16-jackjillbath"
        },
        {
          "yaw": 1.2239902733489814,
          "pitch": 0.038971092817703834,
          "rotation": 0,
          "target": "0-laundry-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-primarybed",
      "name": "PrimaryBed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.686308507458355,
          "pitch": 0.037336674343100285,
          "rotation": 0,
          "target": "17-primarybath"
        },
        {
          "yaw": -2.580305197937495,
          "pitch": 0.03445098843291561,
          "rotation": 0,
          "target": "11-sittingroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.899535191297236,
          "pitch": -0.0065079333442739085,
          "title": "Walk In Closet",
          "text": "Walk in closet with windows to the outside"
        }
      ]
    },
    {
      "id": "11-sittingroom",
      "name": "SittingRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2883555239219593,
          "pitch": 0.06127184018274079,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.2925743141145745,
          "pitch": 0.27973972450180007,
          "rotation": 0,
          "target": "5-top-stairs"
        },
        {
          "yaw": -2.1230635889443423,
          "pitch": -0.013995922461720767,
          "rotation": 0,
          "target": "10-primarybed"
        },
        {
          "yaw": 1.938580168231094,
          "pitch": -0.05425874761416338,
          "rotation": 0,
          "target": "12-entryarea"
        },
        {
          "yaw": 0.41393061495403316,
          "pitch": 0.1023483482055223,
          "rotation": 0,
          "target": "13-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-entryarea",
      "name": "EntryArea",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.407592035812274,
          "pitch": 0.05838222882619881,
          "rotation": 0,
          "target": "13-livingroom"
        },
        {
          "yaw": 1.241496706477541,
          "pitch": -0.007243702734081481,
          "rotation": 0,
          "target": "11-sittingroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.206195581327476,
          "pitch": -0.09196932474913488,
          "title": "Front of House",
          "text": "This goes out to a side walk to the gate and Jefferson St"
        }
      ]
    },
    {
      "id": "13-livingroom",
      "name": "LivingRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26343521174983664,
          "pitch": 0.08843437083168482,
          "rotation": 0,
          "target": "12-entryarea"
        },
        {
          "yaw": 0.8165197449463584,
          "pitch": 0.11596026170206208,
          "rotation": 0,
          "target": "11-sittingroom"
        },
        {
          "yaw": -3.0442318243782935,
          "pitch": 0.1501814241409889,
          "rotation": 0,
          "target": "14-livingroomdining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-livingroomdining",
      "name": "LivingRoomDining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.107518194007099,
          "pitch": 0.015391513275993418,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.18283007553290354,
          "pitch": 0.08146170109660034,
          "rotation": 0,
          "target": "0-laundry-room"
        },
        {
          "yaw": 2.7526235332394258,
          "pitch": 0.10811465629294581,
          "rotation": 0,
          "target": "13-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-scullarybath",
      "name": "ScullaryBath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9288315248690555,
          "pitch": 0.060826400296404515,
          "rotation": 0,
          "target": "6-scullery-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-jackjillbath",
      "name": "Jack&JillBath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9350730481148037,
          "pitch": 0.01781791537950106,
          "rotation": 0,
          "target": "9-laundryroombedroom"
        },
        {
          "yaw": 0.6868748218389609,
          "pitch": 0.06998679229971216,
          "rotation": 0,
          "target": "8-diningroombedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-primarybath",
      "name": "PrimaryBath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19012589218487008,
          "pitch": 0.20496108538027258,
          "rotation": 0,
          "target": "10-primarybed"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
