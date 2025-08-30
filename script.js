document.addEventListener('DOMContentLoaded', () => {
    // --- 定数・変数 ---
    const currencies = [
        // 主要通貨
        { code: 'JPY', name: '日本', flag: '🇯🇵', continent: 'アジア', major: true },
        { code: 'USD', name: 'アメリカ', flag: '🇺🇸', continent: '北米', major: true },
        { code: 'EUR', name: 'ユーロ圏', flag: '🇪🇺', continent: 'ヨーロッパ', major: true },
        { code: 'GBP', name: 'イギリス', flag: '🇬🇧', continent: 'ヨーロッパ', major: true },
        { code: 'CHF', name: 'スイス', flag: '🇨🇭', continent: 'ヨーロッパ', major: true },
        { code: 'CAD', name: 'カナダ', flag: '🇨🇦', continent: '北米', major: true },
        { code: 'AUD', name: 'オーストラリア', flag: '🇦🇺', continent: '中東・オセアニア', major: true },
        { code: 'CNY', name: '中国', flag: '🇨🇳', continent: 'アジア', major: true },
        { code: 'KRW', name: '韓国', flag: '🇰🇷', continent: 'アジア', major: true },

        // アジア
        { code: 'AFN', name: 'アフガニスタン', flag: '🇦🇫', continent: 'アジア' },
        { code: 'AMD', name: 'アルメニア', flag: '🇦🇲', continent: 'アジア' },
        { code: 'AZN', name: 'アゼルバイジャン', flag: '🇦🇿', continent: 'アジア' },
        { code: 'BDT', name: 'バングラデシュ', flag: '🇧🇩', continent: 'アジア' },
        { code: 'BHD', name: 'バーレーン', flag: '🇧🇭', continent: 'アジア' },
        { code: 'BND', name: 'ブルネイ', flag: '🇧🇳', continent: 'アジア' },
        { code: 'BTN', name: 'ブータン', flag: '🇧🇹', continent: 'アジア' },
        { code: 'HKD', name: '香港', flag: '🇭🇰', continent: 'アジア' },
        { code: 'IDR', name: 'インドネシア', flag: '🇮🇩', continent: 'アジア' },
        { code: 'ILS', name: 'イスラエル', flag: '🇮🇱', continent: 'アジア' },
        { code: 'INR', name: 'インド', flag: '🇮🇳', continent: 'アジア' },
        { code: 'IQD', name: 'イラク', flag: '🇮🇶', continent: 'アジア' },
        { code: 'IRR', name: 'イラン', flag: '🇮🇷', continent: 'アジア' },
        { code: 'JOD', name: 'ヨルダン', flag: '🇯🇴', continent: 'アジア' },
        { code: 'KGS', name: 'キルギス', flag: '🇰🇬', continent: 'アジア' },
        { code: 'KHR', name: 'カンボジア', flag: '🇰🇭', continent: 'アジア' },
        { code: 'KWD', name: 'クウェート', flag: '🇰🇼', continent: 'アジア' },
        { code: 'KZT', name: 'カザフスタン', flag: '🇰🇿', continent: 'アジア' },
        { code: 'LAK', name: 'ラオス', flag: '🇱🇦', continent: 'アジア' },
        { code: 'LBP', name: 'レバノン', flag: '🇱🇧', continent: 'アジア' },
        { code: 'LKR', name: 'スリランカ', flag: '🇱🇰', continent: 'アジア' },
        { code: 'MMK', name: 'ミャンマー', flag: '🇲🇲', continent: 'アジア' },
        { code: 'MNT', name: 'モンゴル', flag: '🇲🇳', continent: 'アジア' },
        { code: 'MOP', name: 'マカオ', flag: '🇲🇴', continent: 'アジア' },
        { code: 'MVR', name: 'モルディブ', flag: '🇲🇻', continent: 'アジア' },
        { code: 'MYR', name: 'マレーシア', flag: '🇲🇾', continent: 'アジア' },
        { code: 'NPR', name: 'ネパール', flag: '🇳🇵', continent: 'アジア' },
        { code: 'OMR', name: 'オマーン', flag: '🇴🇲', continent: 'アジア' },
        { code: 'PHP', name: 'フィリピン', flag: '🇵🇭', continent: 'アジア' },
        { code: 'PKR', name: 'パキスタン', flag: '🇵🇰', continent: 'アジア' },
        { code: 'QAR', name: 'カタール', flag: '🇶🇦', continent: 'アジア' },
        { code: 'SGD', name: 'シンガポール', flag: '🇸🇬', continent: 'アジア' },
        { code: 'SYP', name: 'シリア', flag: '🇸🇾', continent: 'アジア' },
        { code: 'THB', name: 'タイ', flag: '🇹🇭', continent: 'アジア' },
        { code: 'TJS', name: 'タジキスタン', flag: '🇹🇯', continent: 'アジア' },
        { code: 'TMT', name: 'トルクメニスタン', flag: '🇹🇲', continent: 'アジア' },
        { code: 'TWD', name: '台湾', flag: '🇹🇼', continent: 'アジア' },
        { code: 'UZS', name: 'ウズベキスタン', flag: '🇺🇿', continent: 'アジア' },
        { code: 'VND', name: 'ベトナム', flag: '🇻🇳', continent: 'アジア' },
        { code: 'YER', name: 'イエメン', flag: '🇾🇪', continent: 'アジア' },

        // ヨーロッパ
        { code: 'ALL', name: 'アルバニア', flag: '🇦🇱', continent: 'ヨーロッパ' },
        { code: 'BAM', name: 'ボスニア・ヘルツェゴビナ', flag: '🇧🇦', continent: 'ヨーロッパ' },
        { code: 'BGN', name: 'ブルガリア', flag: '🇧🇬', continent: 'ヨーロッパ' },
        { code: 'BYN', name: 'ベラルーシ', flag: '🇧🇾', continent: 'ヨーロッパ' },
        { code: 'CZK', name: 'チェコ', flag: '🇨🇿', continent: 'ヨーロッパ' },
        { code: 'DKK', name: 'デンマーク', flag: '🇩🇰', continent: 'ヨーロッパ' },
        { code: 'GEL', name: 'ジョージア', flag: '🇬🇪', continent: 'ヨーロッパ' },
        { code: 'HRK', name: 'クロアチア', flag: '🇭🇷', continent: 'ヨーロッパ' },
        { code: 'HUF', name: 'ハンガリー', flag: '🇭🇺', continent: 'ヨーロッパ' },
        { code: 'ISK', name: 'アイスランド', flag: '🇮🇸', continent: 'ヨーロッパ' },
        { code: 'MDL', name: 'モルドバ', flag: '🇲🇩', continent: 'ヨーロッパ' },
        { code: 'MKD', name: 'マケドニア', flag: '🇲🇰', continent: 'ヨーロッパ' },
        { code: 'NOK', name: 'ノルウェー', flag: '🇳🇴', continent: 'ヨーロッパ' },
        { code: 'PLN', name: 'ポーランド', flag: '🇵🇱', continent: 'ヨーロッパ' },
        { code: 'RON', name: 'ルーマニア', flag: '🇷🇴', continent: 'ヨーロッパ' },
        { code: 'RSD', name: 'セルビア', flag: '🇷🇸', continent: 'ヨーロッパ' },
        { code: 'RUB', name: 'ロシア', flag: '🇷🇺', continent: 'ヨーロッパ' },
        { code: 'SEK', name: 'スウェーデン', flag: '🇸🇪', continent: 'ヨーロッパ' },
        { code: 'TRY', name: 'トルコ', flag: '🇹🇷', continent: 'ヨーロッパ' },
        { code: 'UAH', name: 'ウクライナ', flag: '🇺🇦', continent: 'ヨーロッパ' },

        // 北米
        { code: 'MXN', name: 'メキシコ', flag: '🇲🇽', continent: '北米' },

        // 中南米
        { code: 'ARS', name: 'アルゼンチン', flag: '🇦🇷', continent: '中南米' },
        { code: 'BOB', name: 'ボリビア', flag: '🇧🇴', continent: '中南米' },
        { code: 'BRL', name: 'ブラジル', flag: '🇧🇷', continent: '中南米' },
        { code: 'CLP', name: 'チリ', flag: '🇨🇱', continent: '中南米' },
        { code: 'COP', name: 'コロンビア', flag: '🇨🇴', continent: '中南米' },
        { code: 'CRC', name: 'コスタリカ', flag: '🇨🇷', continent: '中南米' },
        { code: 'CUP', name: 'キューバ', flag: '🇨🇺', continent: '中南米' },
        { code: 'DOP', name: 'ドミニカ共和国', flag: '🇩🇴', continent: '中南米' },
        { code: 'GTQ', name: 'グアテマラ', flag: '🇬🇹', continent: '中南米' },
        { code: 'HNL', name: 'ホンジュラス', flag: '🇭🇳', continent: '中南米' },
        { code: 'JMD', name: 'ジャマイカ', flag: '🇯🇲', continent: '中南米' },
        { code: 'NIO', name: 'ニカラグア', flag: '🇳🇮', continent: '中南米' },
        { code: 'PAB', name: 'パナマ', flag: '🇵🇦', continent: '中南米' },
        { code: 'PEN', name: 'ペルー', flag: '🇵🇪', continent: '中南米' },
        { code: 'PYG', name: 'パラグアイ', flag: '🇵🇾', continent: '中南米' },
        { code: 'TTD', name: 'トリニダード・トバゴ', flag: '🇹🇹', continent: '中南米' },
        { code: 'UYU', name: 'ウルグアイ', flag: '🇺🇾', continent: '中南米' },
        { code: 'VEF', name: 'ベネズエラ', flag: '🇻🇪', continent: '中南米' },

        // アフリカ
        { code: 'AOA', name: 'アンゴラ', flag: '🇦🇴', continent: 'アフリカ' },
        { code: 'BIF', name: 'ブルンジ', flag: '🇧🇮', continent: 'アフリカ' },
        { code: 'BWP', name: 'ボツワナ', flag: '🇧🇼', continent: 'アフリカ' },
        { code: 'CDF', name: 'コンゴ民主共和国', flag: '🇨🇩', continent: 'アフリカ' },
        { code: 'CVE', name: 'カーボベルデ', flag: '🇨🇻', continent: 'アフリカ' },
        { code: 'DJF', name: 'ジブチ', flag: '🇩🇯', continent: 'アフリカ' },
        { code: 'DZD', name: 'アルジェリア', flag: '🇩🇿', continent: 'アフリカ' },
        { code: 'EGP', name: 'エジプト', flag: '🇪🇬', continent: 'アフリカ' },
        { code: 'ERN', name: 'エリトリア', flag: '🇪🇷', continent: 'アフリカ' },
        { code: 'ETB', name: 'エチオピア', flag: '🇪🇹', continent: 'アフリカ' },
        { code: 'GHS', name: 'ガーナ', flag: '🇬🇭', continent: 'アフリカ' },
        { code: 'GMD', name: 'ガンビア', flag: '🇬🇲', continent: 'アフリカ' },
        { code: 'GNF', name: 'ギニア', flag: '🇬🇳', continent: 'アフリカ' },
        { code: 'KES', name: 'ケニア', flag: '🇰🇪', continent: 'アフリカ' },
        { code: 'KMF', name: 'コモロ', flag: '🇰🇲', continent: 'アフリカ' },
        { code: 'LRD', name: 'リベリア', flag: '🇱🇷', continent: 'アフリカ' },
        { code: 'LSL', name: 'レソト', flag: '🇱🇸', continent: 'アフリカ' },
        { code: 'LYD', name: 'リビア', flag: '🇱🇾', continent: 'アフリカ' },
        { code: 'MAD', name: 'モロッコ', flag: '🇲🇦', continent: 'アフリカ' },
        { code: 'MGA', name: 'マダガスカル', flag: '🇲🇬', continent: 'アフリカ' },
        { code: 'MRU', name: 'モーリタニア', flag: '🇲🇷', continent: 'アフリカ' },
        { code: 'MUR', name: 'モーリシャス', flag: '🇲🇺', continent: 'アフリカ' },
        { code: 'MWK', name: 'マラウイ', flag: '🇲🇼', continent: 'アフリカ' },
        { code: 'NAD', name: 'ナミビア', flag: '🇳🇦', continent: 'アフリカ' },
        { code: 'NGN', name: 'ナイジェリア', flag: '🇳🇬', continent: 'アフリカ' },
        { code: 'RWF', name: 'ルワンダ', flag: '🇷🇼', continent: 'アフリカ' },
        { code: 'SLL', name: 'シエラレオネ', flag: '🇸🇱', continent: 'アフリカ' },
        { code: 'SOS', name: 'ソマリア', flag: '🇸🇴', continent: 'アフリカ' },
        { code: 'SSP', name: '南スーダン', flag: '🇸🇸', continent: 'アフリカ' },
        { code: 'STN', name: 'サントメ・プリンシペ', flag: '🇸🇹', continent: 'アフリカ' },
        { code: 'SZL', name: 'エスワティニ', flag: '🇸🇿', continent: 'アフリカ' },
        { code: 'TND', name: 'チュニジア', flag: '🇹🇳', continent: 'アフリカ' },
        { code: 'TZS', name: 'タンザニア', flag: '🇹🇿', continent: 'アフリカ' },
        { code: 'UGX', name: 'ウガンダ', flag: '🇺🇬', continent: 'アフリカ' },
        { code: 'ZAR', name: '南アフリカ', flag: '🇿🇦', continent: 'アフリカ' },
        { code: 'ZMW', name: 'ザンビア', flag: '🇿🇲', continent: 'アフリカ' },

        // 中東・オセアニア
        { code: 'AED', name: 'アラブ首長国連邦', flag: '🇦🇪', continent: '中東・オセアニア' },
        { code: 'FJD', name: 'フィジー', flag: '🇫🇯', continent: '中東・オセアニア' },
        { code: 'NZD', name: 'ニュージーランド', flag: '🇳🇿', continent: '中東・オセアニア' },
        { code: 'PGK', name: 'パプアニューギニア', flag: '🇵🇬', continent: '中東・オセアニア' },
        { code: 'SAR', name: 'サウジアラビア', flag: '🇸🇦', continent: '中東・オセアニア' },
        { code: 'SBD', name: 'ソロモン諸島', flag: '🇸🇧', continent: '中東・オセアニア' },
        { code: 'TOP', name: 'トンガ', flag: '🇹🇴', continent: '中東・オセアニア' },
        { code: 'VUV', name: 'バヌアツ', flag: '🇻🇺', continent: '中東・オセアニア' },
        { code: 'WST', name: 'サモア', flag: '🇼🇸', continent: '中東・オセアニア' },
    ];
    let rateChart;

    // --- DOM要素の取得 ---
    const amountInput = document.getElementById('amount-input');
    const currencySelect = document.getElementById('currency-select');
    const dateInput = document.getElementById('date-input');
    const resultOutput = document.getElementById('result-output');
    const currencyGrid = document.getElementById('currency-grid');
    const chartCanvas = document.getElementById('rateChart').getContext('2d');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const updateChartBtn = document.getElementById('update-chart');
    const chartWrapper = document.querySelector('.chart-wrapper');
    const chartUnavailableMessageDiv = document.getElementById('chart-unavailable-message');
    const supportedCurrenciesList = document.getElementById('supported-currencies-list');

    // --- 初期設定 ---
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    const formatDate = (date) => date.toISOString().split('T')[0];

    dateInput.value = formatDate(today);
    dateInput.max = formatDate(today);
    startDateInput.value = formatDate(thirtyDaysAgo);
    endDateInput.value = formatDate(today);

    // --- 通貨リストの生成 ---
    const currenciesByContinent = currencies.reduce((acc, currency) => {
        if (!acc[currency.continent]) { acc[currency.continent] = []; }
        acc[currency.continent].push(currency);
        return acc;
    }, {});
    const majorCurrencies = currencies.filter(c => c.major);
    majorCurrencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency.code;
        option.textContent = `${currency.name} (${currency.code})`;
        if (currency.code === 'USD') { option.selected = true; }
        currencySelect.appendChild(option);
    });
    const continentOrder = ['アジア', 'ヨーロッパ', '北米', '中南米', 'アフリカ', '中東・オセアニア'];
    continentOrder.forEach(continent => {
        if (currenciesByContinent[continent]) {
            const continentWrapper = document.createElement('details');
            continentWrapper.classList.add('continent-section');
            

            const continentTitle = document.createElement('summary');
            continentTitle.textContent = continent;
            continentWrapper.appendChild(continentTitle);
            const currencyList = document.createElement('ul');
            currenciesByContinent[continent].forEach(currency => {
                const item = document.createElement('li');
                item.classList.add('currency-item');
                item.dataset.code = currency.code;
                item.innerHTML = `${currency.name} <span class="code">${currency.code}</span>`;
                item.addEventListener('click', () => {
                    let optionExists = false;
                    for (let i = 0; i < currencySelect.options.length; i++) {
                        if (currencySelect.options[i].value === currency.code) {
                            optionExists = true;
                            break;
                        }
                    }

                    if (!optionExists) {
                        const option = document.createElement('option');
                        option.value = currency.code;
                        option.textContent = `${currency.name} (${currency.code})`;
                        currencySelect.appendChild(option);
                    }

                    currencySelect.value = currency.code;
                    handleCalculationAndChartUpdate();
                });
                currencyList.appendChild(item);
            });
            continentWrapper.appendChild(currencyList);
            currencyGrid.appendChild(continentWrapper);
        }
    });

    // --- 対応通貨リストの表示 ---
    const fetchAndDisplaySupportedCurrencies = async () => {
        try {
            const response = await fetch('https://api.frankfurter.app/currencies');
            if (!response.ok) throw new Error('対応通貨リストの取得に失敗しました。');
            const supportedCurrencies = await response.json();
            
            supportedCurrenciesList.innerHTML = ''; // Clear existing list
            for (const code in supportedCurrencies) {
                const listItem = document.createElement('li');
                listItem.textContent = `${code}: ${supportedCurrencies[code]}`;
                supportedCurrenciesList.appendChild(listItem);
            }
        } catch (error) {
            console.error('対応通貨リストの取得エラー:', error);
            supportedCurrenciesList.innerHTML = '<li>リストの取得に失敗しました。</li>';
        }
    };

    // --- 為替レート計算 (Frankfurter API) ---
    const getRate = async (currency, date = 'latest') => {
        resultOutput.textContent = '計算中...';
        const url = `https://api.frankfurter.app/${date}?from=${currency}&to=JPY`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('ネットワークエラー');
            const data = await response.json();
            
            if (!data.rates || !data.rates.JPY) {
                throw new Error('有効なレートを取得できませんでした。');
            }
            return data.rates.JPY;
        } catch (error) {
            console.error('APIエラー:', error);
            resultOutput.textContent = '取得不可';
            return null;
        }
    };

    const calculateRate = async () => {
        const amount = parseFloat(amountInput.value);
        const currency = currencySelect.value;
        const selectedDate = dateInput.value;

        if (isNaN(amount) || amount < 0) {
            resultOutput.textContent = '---';
            return;
        }
        if (currency === 'JPY') {
            resultOutput.textContent = amount.toLocaleString();
            return;
        }
        const rate = await getRate(currency, selectedDate);
        if (rate) {
            const result = amount * rate;
            resultOutput.textContent = result.toLocaleString(undefined, { maximumFractionDigits: 2 });
        }
    };

    // --- チャート処理 (Frankfurter API) ---
    const drawChart = (labels, data, currency) => {
        if (rateChart) {
            rateChart.destroy();
        }
        rateChart = new Chart(chartCanvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `${currency} / JPY`,
                    data: data,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    };

    const fetchChartData = async (currency, start, end) => {
        if (currency === 'JPY') {
            drawChart([start, end], [1, 1], currency);
            return;
        }
        const url = `https://api.frankfurter.app/${start}..${end}?from=${currency}&to=JPY`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('ネットワークエラー');
            const data = await response.json();

            if (!data.rates) {
                drawChart([], [], currency);
                throw new Error('チャートデータの取得に失敗しました。');
            }

            const rates = data.rates;
            const labels = Object.keys(rates).sort();
            const chartData = labels.map(label => rates[label].JPY);

            drawChart(labels, chartData, currency);
        } catch (error) {
            console.error('チャートAPIエラー:', error);
        }
    };

    // --- イベントハンドラ ---
    const handleCalculationAndChartUpdate = () => {
        calculateRate();
        const currency = currencySelect.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;
        fetchChartData(currency, startDate, endDate);
    };

    amountInput.addEventListener('input', calculateRate);
    dateInput.addEventListener('change', handleCalculationAndChartUpdate);
    currencySelect.addEventListener('change', handleCalculationAndChartUpdate);
    updateChartBtn.addEventListener('click', () => {
        const currency = currencySelect.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;
        fetchChartData(currency, startDate, endDate);
    });

    // --- 初期化処理 ---
    handleCalculationAndChartUpdate();
    fetchAndDisplaySupportedCurrencies();

    // --- チャートへ移動ボタンの処理 ---
    const gotoChartBtn = document.getElementById('goto-chart-btn');
    const chartContainer = document.getElementById('chart-container');
    const converterSection = document.getElementById('converter');

    gotoChartBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        const headerHeight = converterSection.offsetHeight;
        const targetPosition = chartContainer.getBoundingClientRect().top + window.pageYOffset;
        const finalPosition = targetPosition - headerHeight;

        window.scrollTo({
            top: finalPosition,
            behavior: 'smooth'
        });
    });
});
