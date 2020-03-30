const mockEvents = {
  city: {
    id: 1007700,
    city: "München",
    lat: 48.14,
    lon: 11.58,
    state: "",
    country: "de",
    zip: "meetup3",
    member_count: 1257
  },
  events: [
    {
      created: 1580674834000,
      duration: 5400000,
      fee: {
        accepts: "cash",
        amount: 15,
        currency: "EUR",
        description: "",
        label: "Price",
        required: false
      },
      id: "268407148",
      name: "Mit_Sing_Konzerte Mit Tönen verwöhnen",
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1592658000000,
      local_date: "2020-06-20",
      local_time: "15:00",
      updated: 1580674932000,
      utc_offset: 7200000,
      waitlist_count: 0,
      yes_rsvp_count: 2,
      group: {
        created: 1577122409000,
        name: "Herzensgesang München Meetup Gruppe",
        id: 33129270,
        join_mode: "open",
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: "Herzensgesang-Munchen-Meetup-Gruppe",
        who: "Singbegeisterte",
        localized_location: "München, Germany",
        state: "",
        country: "de",
        region: "en_US",
        timezone: "Europe/Berlin"
      },
      link:
        "https://www.meetup.com/Herzensgesang-Munchen-Meetup-Gruppe/events/268407148/",
      description:
        "<p>Konzerte *Mit Tönen verwöhnen*<br/>einfach kommen, dabei sein, lauschen, singen und das Erdenwunder-Festival mit vielfältigen Angeboten genießen</p> <p>Mitsingkonzert mit Seelen- und Herzensliedern<br/>zum Ankommen, Entspannen, sich mit sich verbinden und loslassen.</p> <p>Komm, wie Du bist!</p> <p>Auf dem Erdenwunder-Festival, 73312 Geislingen-Aufhausen</p> <p>Uhrzeit wird vor Ort ausgeschrieben<br/>Sa,[masked] und So,[masked] je 90 Minuten</p> <p>SINGEN MACHT GLÜCKLICH<br/>Music gives a soul to the universe, wings to the mind, flight to imagination and life to everything. (Plato)</p> <p>Verbinde Dich hier und jetzt mit Deiner Seele, mit Deiner Stimme, mit Deiner Herzensgabe, Deiner Liebe zum Leben, Deiner Liebe zur Erde. Dem Wunder, hier auf der Erde zu sein!</p> <p>SEI EINFACH DA!</p> <p>Nika hat nicht nur eine tolle Stimme, die mitreißt. Sie IST eine kraftvolle Stimme in Zeiten des Wandels. Eine, die „JA“ sagt zum Leben mit allem, was ist.<br/>Eine, deren Lieder wie gute Freunde sind, die uns unterstützen, nachdenklich machen und unsere Lebensfreude herauskitzeln.</p> <p>Nika teilt mit uns deutschsprachige Herzensmusik aus eigener Feder sowie Rainbow-Songs und Chants aus verschiedenen Kulturen.<br/>Es wird eine musikalische Reise zum Einschwingen und Mitsingen oder auch Lauschen und Träumen. Nikas Stimme rangiert von zart und verletzlich über erotisch und ehrlich bis hin zu frech und kraftvoll... Ein purer Genuss für Herz und Sinne.</p> <p>Wir freuen uns auf Dich und uns!</p> ",
      visibility: "public",
      member_pay_fee: false
    },
    {
      created: 1576331652000,
      duration: 7200000,
      id: "267185144",
      name:
        "Corner's Jam Session! (Just watch or Play. Any skill levels are welcome!)",
      rsvp_limit: 8,
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1586973600000,
      local_date: "2020-04-15",
      local_time: "20:00",
      updated: 1576331652000,
      utc_offset: 7200000,
      waitlist_count: 0,
      yes_rsvp_count: 3,
      venue: {
        id: 26148856,
        name: "Kulturhaus Milbertshofen",
        lat: 48.18212890625,
        lon: 11.567193031311035,
        repinned: true,
        address_1: "Curt Mezger Platz 1",
        city: "München",
        country: "de",
        localized_country_name: "Germany"
      }
    }
  ]
};

export { mockEvents };
