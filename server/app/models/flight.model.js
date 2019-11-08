const mongoose = require('mongoose');

const FlightSchema = mongoose.Schema({
    "flight_number": {
        "type": "Number"
    },
    "mission_name": {
        "type": "String"
    },
    "mission_id": {
        "type": "Array"
    },
    "upcoming": {
        "type": "Boolean"
    },
    "launch_year": {
        "type": "Date"
    },
    "launch_date_unix": {
        "type": "Number"
    },
    "launch_date_utc": {
        "type": "Date"
    },
    "launch_date_local": {
        "type": "Date"
    },
    "is_tentative": {
        "type": "Boolean"
    },
    "tentative_max_precision": {
        "type": "String"
    },
    "tbd": {
        "type": "Boolean"
    },
    "launch_window": {
        "type": "Number"
    },
    "rocket": {
        "rocket_id": {
            "type": "String"
        },
        "rocket_name": {
            "type": "String"
        },
        "rocket_type": {
            "type": "String"
        },
        "first_stage": {
            "cores": {
                "type": [
                    "Mixed"
                ]
            }
        },
        "second_stage": {
            "block": {
                "type": "Number"
            },
            "payloads": {
                "type": [
                    "Mixed"
                ]
            }
        },
        "fairings": {
            "reused": {
                "type": "Boolean"
            },
            "recovery_attempt": {
                "type": "Boolean"
            },
            "recovered": {
                "type": "Boolean"
            },
            "ship": {
                "type": "Mixed"
            }
        }
    },
    "ships": {
        "type": "Array"
    },
    "telemetry": {
        "flight_club": {
            "type": "Mixed"
        }
    },
    "reuse": {
        "core": {
            "type": "Boolean"
        },
        "side_core1": {
            "type": "Boolean"
        },
        "side_core2": {
            "type": "Boolean"
        },
        "fairings": {
            "type": "Boolean"
        },
        "capsule": {
            "type": "Boolean"
        }
    },
    "launch_site": {
        "site_id": {
            "type": "String"
        },
        "site_name": {
            "type": "String"
        },
        "site_name_long": {
            "type": "String"
        }
    },
    "launch_success": {
        "type": "Boolean"
    },
    "launch_failure_details": {
        "time": {
            "type": "Number"
        },
        "altitude": {
            "type": "Mixed"
        },
        "reason": {
            "type": "String"
        }
    },
    "links": {
        "mission_patch": {
            "type": "String"
        },
        "mission_patch_small": {
            "type": "String"
        },
        "reddit_campaign": {
            "type": "Mixed"
        },
        "reddit_launch": {
            "type": "Mixed"
        },
        "reddit_recovery": {
            "type": "Mixed"
        },
        "reddit_media": {
            "type": "Mixed"
        },
        "presskit": {
            "type": "Mixed"
        },
        "article_link": {
            "type": "String"
        },
        "wikipedia": {
            "type": "String"
        },
        "video_link": {
            "type": "String"
        },
        "youtube_id": {
            "type": "String"
        },
        "flickr_images": {
            "type": "Array"
        }
    },
    "details": {
        "type": "String"
    },
    "static_fire_date_utc": {
        "type": "Date"
    },
    "static_fire_date_unix": {
        "type": "Number"
    },
    "timeline": {
        "webcast_liftoff": {
            "type": "Number"
        }
    },
    "crew": {
        "type": "Mixed"
    }
}, {
    timestamps: true
});

const Flight = mongoose.model('Flight', FlightSchema, "flights");

module.exports = Flight;