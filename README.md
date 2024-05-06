Islamic Resources API

This repository hosts an API providing access to a comprehensive collection of Islamic resources, including the Quran, Hadith (sayings and actions of Prophet Muhammad ﷺ), Duas (supplications), and Seerah (biography of Prophet Muhammad ﷺ). Designed to be easily integratable into web and mobile applications, this API offers developers a convenient way to access authenticated Islamic texts and references programmatically.

Key Features:

Quran: Retrieve Quranic verses with translations in multiple languages and recitations.
Hadith: Access authentic Hadith literature from various collections, along with explanations and categorizations.
Duas: Obtain a diverse range of supplications for various occasions and needs.
Seerah: Explore the biography of Prophet Muhammad ﷺ, including his life events, teachings, and historical context.
Usage:

Quran API:
/quran/{chapter}/{verse}: Retrieve specific verses.
/quran/random: Get random verses.
/quran/search?q={query}: Search Quranic verses.
Hadith API:
/hadith/{collection}/{hadith_number}: Retrieve specific Hadith.
/hadith/random: Get random Hadith.
/hadith/search?q={query}: Search Hadith texts.
Duas API:
/duas/{category}: Retrieve Duas by category.
/duas/random: Get random Duas.
/duas/search?q={query}: Search Duas by keywords.
Seerah API:
/seerah/{event}: Retrieve specific events from the Seerah.
/seerah/random: Get random Seerah events.
/seerah/search?q={query}: Search Seerah events.
Contributions:
Contributions and suggestions for improving and expanding this API are welcome. Please fork the repository, make your changes, and submit a pull request.

License:
This API is open-source and licensed under MIT License, allowing for free use and modification.

Support:
For any questions, issues, or feature requests, please open an issue on GitHub.
