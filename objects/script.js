let siparisler = [{ 
    "siparis-id ": "101",
    "siparis-tarihi" : "2020",
    "urunler" : [
        {    "urun id" : "4", 
            "urun fiyatı" : 3000},
            {
                "urun id" : "6",
                "urun fiyatı" : 4000
            }
        
    ]
    }, { 
        "siparis-id ": "102",
        "siparis-tarihi" : "2020",
        "urunler" : [
            {    "urun id" : "7", 
                "urun fiyatı" : 6000},
                {
                    "urun id" : "6",
                    "urun fiyatı" : 14000
                }
            
        ]
        }
    
    
    ]
    let kdv = 0.18
    let prices1 = siparisler[0].urunler[0]["urun fiyatı"] + siparisler[0].urunler[1]["urun fiyatı"] 
    
    let prices2 = siparisler[1].urunler[0]["urun fiyatı"] + siparisler[1].urunler[1]["urun fiyatı"] 
    
    let find = ((prices1 + prices2) * kdv) + prices1+ prices2
    
    console.log(find)