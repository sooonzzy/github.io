let userName = '';
let personality = '';
let sensitivity = '';
let kindness = '';
let selectedGenresList = [];
let selectedGender = '';

// 전역 변수로 현재 단계 관리
let currentStep = 1;

// 캐릭터 데이터베이스
const characters = {
    '<청설>, 티엔커': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '로맨스', sub: '휴먼' },
        description: '마음을 듣고 가슴으로 느낄 수 있는 다정함을 지녔다. 도시락 가게를 하는 부모님을 돕는다.',
        frontImage: './images/티엔커f.png',
        backImage: './images/티엔커b.png',
        frameImage: './frames/티엔커.png'
    },

    '<응답하라 1988>, 성덕선': {
        gender: 'female',
        tags: ['관계지향적인', '무던한', '디정한'],
        genres: { main: '로맨스', sub: '코미디' },
        description: '교과서보다는 하이틴 로맨스 소설에, 성적보다는 외모에 관심 많은 유쾌 발랄 낭랑 18세 소녀.',
        frontImage: './images/성덕선f.png',
        backImage: './images/성덕선b.png',
        frameImage: './frames/성덕선.png'
    },

    '<사랑 후에 오는 것들>, 준고': {
        gender: 'male',
        tags: ['독립적인', '무던한', '시니컬한'],
        genres: { main: '로맨스', sub: '로맨스' },
        description: '정의롭지만 사랑 앞에서 소심하기도 하다. 운명 같은 사랑 앞에 녹록치 않은 현실을 겪는 작가.',
        frontImage: './images/준고f.png',
        backImage: './images/준고b.png',
        frameImage: './frames/준고.png'
    },

    '<스물다섯 스물하나>, 나희도': {
        gender: 'female',
        tags: ['독립적인', '무던한', '다정한'],
        genres: { main: '로맨스', sub: '휴먼' },
        description: '다혈질적이고 패기 넘치는 성격으로, 목표를 향해 굳건하게 달려가는 고등학생이자 펜싱 국가대표.',
        frontImage: './images/나희도f.png',
        backImage: './images/나희도b.png',
        frameImage: './frames/나희도.png'
    },

    '<라라랜드>, 세바스찬 와일더': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '로맨스', sub: '코미디' },
        description: '음악에 대한 확고한 철학과 고집을 지녔다. 현실과 타협하지 않고, 꿈과 신념을 지키는 뮤지션.',
        frontImage: './images/세바스찬f.png',
        backImage: './images/세바스찬b.png',
        frameImage: './frames/세바스찬.png'
    },

    '<눈물의 여왕>, 홍해인': {
        gender: 'female',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '로맨스', sub: '휴먼' },
        description: '극심한 외강내유에 츤데레 스타일이다. 인간미 없는 재벌 3세.',
        frontImage: './images/홍해인f.png',
        backImage: './images/홍해인b.png',
        frameImage: './frames/홍해인.png'
    },

    '<상견니>, 리쯔웨이': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '회/빙/환', sub: '로맨스' },
        description: '밝고 자연스러운 성격에 매력적인 미소를 가진 고등학생.',
        frontImage: './images/리쯔웨이f.png',
        backImage: './images/리쯔웨이b.png',
        frameImage: './frames/리쯔웨이.png'
    },

    '<내 남편과 결혼해줘>, 강지원': {
        gender: 'female',
        tags: ['독립적인', '무던한', '다정한'],
        genres: { main: '회/빙/환', sub: '로맨스' },
        description: '내성적이지만 걸크러쉬의 면모를 가졌다. 식품업계 대기업의 마케팅 1부 대.',
        frontImage: './images/강지원f.png',
        backImage: './images/강지원b.png',
        frameImage: './frames/강지원.png'
    },

    '<재벌집 막내아들>, 진도준': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '회/빙/환', sub: '판타지' },
        description: '명석한 두뇌와 집요한 승부 근성을 가진 진양철 회장의 막내 손자.',
        frontImage: './images/진도준f.png',
        backImage: './images/진도준b.png',
        frameImage: './frames/진도준.png'
    },

    '<어게인 마이 라이프>, 김희아': {
        gender: 'female',
        tags: ['독립적인', '무던한', '다정한'],
        genres: { main: '회/빙/환', sub: '액션/모험' },
        description: '해박한 지식, 깡이면 깡, 부족한 게 없다. 재벌가의 자식이지만 국밥을 즐겨 먹는 소탈한 성격까지 가진 천하그룹 경영전략본부장.',
        frontImage: './images/김희아f.png',
        backImage: './images/김희아b.png',
        frameImage: './frames/김희아.png'
    },

    '<이번 생도 잘 부탁해>, 문서하': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '회/빙/환', sub: '로맨스' },
        description: '눈동자에 많은 생각이 서려 있는 쓸쓸한 눈빛. 마음속은 아직도 소년인 채로 상처 속에 머물러있는 호텔 전략기획팀 전무.',
        frontImage: './images/문서하f.png',
        backImage: './images/문서하b.png',
        frameImage: './frames/문서하.png'
    },

    '<18 어게인>, 고우영': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '시니컬한'],
        genres: { main: '회/빙/환', sub: '판타지' },
        description: '까칠데 찌질한 성격을 가졌다. 고등학교 시절 농구부로 최고의 인기를 누렸지만 모든 것을 내려놓고 생업에 뛰어들었다.',
        frontImage: './images/고우영f.png',
        backImage: './images/고우영b.png',
        frameImage: './frames/고우영.png'
    },

    '<브루클린 나인나인>, 제이크 페랄타': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '코미디', sub: '직업물' },
        description: '장난기 넘치지만 능력도 좋은 뉴욕 브루클린의 99번 관할서 경찰.',
        frontImage: './images/제이크f.png',
        backImage: './images/제이크b.png',
        frameImage: './frames/제이크.png'
    },

    '<힘쎈여자 강남순>, 강남순': {
        gender: 'female',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '코미디', sub: '판타지' },
        description: '씩씩하고, 용감하고, 당돌하며, 순수하다. 동시에 와일드한 매력이 있는 힘쎈여자.',
        frontImage: './images/강남순f.png',
        backImage: './images/강남순b.png',
        frameImage: './frames/강남순.png'
    },

    '<빅뱅이론>, 셸든 쿠퍼': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '코미디', sub: '휴먼' },
        description: '천재성을 가지고 있지만 사회성은 전혀 없는 이론물리학자.',
        frontImage: './images/셸든f.png',
        backImage: './images/셸든b.png',
        frameImage: './frames/셸든.png'
    },

    '<소년시대>, 장병태': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '코미디', sub: '휴먼' },
        description: '약하고 찌질한 모습 속에서도 특유의 리더십이 돋보이는 고등학생.',
        frontImage: './images/장병태f.png',
        backImage: './images/장병태b.png',
        frameImage: './frames/장병태.png'
    },

    '<엽기��인 그녀>, 그녀': {
        gender: 'female',
        tags: ['독립적인', '무던한', '시니컬한'],
        genres: { main: '코미디', sub: '로맨스' },
        description: '툭 하면 얼굴에 펀치를 날리고, 죽을래?라며 협박을 일삼는, 말그대로 엽기적인 대학생.',
        frontImage: './images/그녀f.png',
        backImage: './images/그녀b.png',
        frameImage: './frames/그녀.png'
    },

    '<열혈사제>, 김해일': {
        gender: 'male',
        tags: ['독립적인', '무던한', '시니컬한'],
        genres: { main: '코미디', sub: '액션/모험' },
        description: '꼭지가 열리면 통제불능. 인간과 세상에 대한 분석력, 통찰력, 판단력이 매우 날카롭고 정확한 (구) 국정원 요원, (현) 가톨릭 수도사제.',
        frontImage: './images/김해일f.png',
        backImage: './images/김해일b.png',
        frameImage: './frames/김해일.png'
    },

    '<슬기로운 의사생활>, 이익준': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '휴먼', sub: '직업물' },
        description: '못 하는 게 없는 만능맨. 열등감과 컴플렉스, 선입견이 전혀 없는, 인격적으로 완성된 간담췌외과 부교수.',
        frontImage: './images/이익준f.png',
        backImage: './images/이익준b.png',
        frameImage: './frames/이익준.png'
    },

    '<정신병동에도 아침이 와요>, 정다은': {
        gender: 'female',
        tags: ['관계지향적인', '예민한', '다정한'],
        genres: { main: '휴먼', sub: '휴먼' },
        description: '따뜻한 마음과 친절로 환자들에게 큰 위로를 주는 명신대병원 정신건강의학과 간호사.',
        frontImage: './images/정다은f.png',
        backImage: './images/정다은b.png',
        frameImage: './frames/정다은.png'
    },

    '<닥터 슬럼프>, 여정우': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '휴먼', sub: '로맨스' },
        description: '실력과 얼굴, 위트를 모두 갖춰 인기란 것이 폭발한 성형외과 의사.',
        frontImage: './images/여정우f.png',
        backImage: './images/여정우b.png',
        frameImage: './frames/여정우.png'
    },

    '<런 온>, 오미주': {
        gender: 'female',
        tags: ['독립적인', '예민한', '다정한'],
        genres: { main: '휴먼', sub: '로맨스' },
        description: '옳다고 생각하는 일에 거침없이 행동하고 할 말은 꼭 하는 영화 번역가.',
        frontImage: './images/오미주f.png',
        backImage: './images/오미주b.png',
        frameImage: './frames/오미주.png'
    },

    '<멜로가 체질>, 손범수': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '휴먼', sub: '코미디' },
        description: '은은한 똘끼가 있다. 방송가에서 성공 보증수표로 불리는 스타 드라마 피디.',
        frontImage: './images/손범수f.png',
        backImage: './images/손범수b.png',
        frameImage: './frames/손범수.png'
    },

    '<라켓 소년단>, 한세윤': {
        gender: 'female',
        tags: ['독립적인', '예민한', '니컬한'],
        genres: { main: '휴먼', sub: '코미디' },
        description: '예민한 것이 많은 최연소 배드민턴 국가대표 선수이자 고등학생.',
        frontImage: './images/한세윤f.png',
        backImage: './images/한세윤b.png',
        frameImage: './frames/한세윤.png'
    },

    '<반짝이는 워터멜론>, 하은결': {
        gender: 'male',
        tags: ['독립적인', '무던한', '다정한'],
        genres: { main: '판타지', sub: '휴먼' },
        description: '젠틀함과 유머러스함이 완벽한 조화를 이루고, 어른스럽고 의젓한 모습까지 갖췄다. 모범생의 정석을 보여주는 고등학생.',
        frontImage: './images/하은결f.png',
        backImage: './images/하은결b.png',
        frameImage: './frames/하은결.png'
    },

    '<선재 업고 튀어>, 임솔': {
        gender: 'female',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '판타지', sub: '로맨스' },
        description: '귀엽고 사랑스러운 성격을 가졌다. 해사하게 웃을 때면 봄볕 같은 온기가 느껴지는 취준생.',
        frontImage: './images/임솔f.png',
        backImage: './images/임솔b.png',
        frameImage: './frames/임솔.png'
    },

    '<무빙>, 이강훈': {
        gender: 'male',
        tags: ['독립적인', '무던한', '시니컬한'],
        genres: { main: '판타지', sub: '액션/모험' },
        description: '엄청난 신체 능력을 보유하였으나 이를 철저히 숨기면서 생활한다. 비상한 머리와 듯한 품행을 가진 등학생.',
        frontImage: './images/이강훈f.png',
        backImage: './images/이강훈b.png',
        frameImage: './frames/이강훈.png'
    },

    '<월터의 상상은 현실이 된다>, 월터': {
        gender: 'male',
        tags: ['독립적인', '무던한', '다정한'],
        genres: { main: '판타지', sub: '액션/모험' },
        description: '해본 것도, 가본 곳도, 특별한 일도 없다. 유일한 취미는 상상. 자신의 꿈은 접어둔 채 16년째 라이프 잡지사에서 일하고 있는 포토 에디터.',
        frontImage: './images/월터f.png',
        backImage: './images/월터b.png',
        frameImage: './frames/월터.png'
    },

    '<해리포터>, 볼드모트': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '판타지', sub: '액션/모험' },
        description: '마법사의 세계에서 강대한 마력과 야심, 많은 사람들을 휘어잡는 카리스마를 지녔다. 강력하지만 잔혹한 어둠의 마법사.',
        frontImage: './images/볼드모트f.png',
        backImage: './images/볼드모트b.png',
        frameImage: './frames/볼드모트.png'
    },

    '<지옥에서 온 판사>, 강빛나': {
        gender: 'female',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '판타지', sub: '범죄/스릴러' },
        description: '명품과 사치를 매우 즐기는 시원시원한 성격. 법관으로서의 사명감과 책임감이 전혀 없는 판사.',
        frontImage: './images/강빛나f.png',
        backImage: './images/강빛나b.png',
        frameImage: './frames/강빛나.png'
    },

    '<낭만닥터 김사부>, 부용주': {
        gender: 'male',
        tags: ['독립적인', '예민한', '다정한'],
        genres: { main: '직업물', sub: '휴먼' },
        description: '언제나 환자를 최우선으로 둔다. 강한 사명감을 가진 거산대학교병원 일반외과 전문의.',
        frontImage: './images/부용주f.png',
        backImage: './images/부용주b.png',
        frameImage: './frames/부용주.png'
    },

    '<언내추럴>, 미스미 미코토': {
        gender: 'female',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '직업물', sub: '휴먼' },
        description: '꼼꼼한 성격에 근성과 배짱있는 성격. 인간성도 갖춘 UDI 라보 소속 부검의.',
        frontImage: './images/미스미f.png',
        backImage: './images/미스미b.png',
        frameImage: './frames/미스미.png'
    },

    '<슈츠>, 마이크 로스': {
        gender: 'male',
        tags: ['관계지향적인', '무던한', '시니컬한'],
        genres: { main: '직업물', sub: '휴먼' },
        description: '한번 본 것은 통째로 암기해버릴 만큼 천재적인 두뇌를 가진 가짜 변사.',
        frontImage: './images/마이크f.png',
        backImage: './images/마이크b.png',
        frameImage: './frames/마이크.png'
    },

    '<굿파트너>, 차은경': {
        gender: 'female',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '직업물', sub: '휴먼' },
        description: '독립적이고 예민하지만 한편으로는 따뜻한 마음을 가진 법무법인 서울의 에이스 변호사.',
        frontImage: './images/차은경f.png',
        backImage: './images/차은경b.png',
        frameImage: './frames/차은경.png'
    },

    '<비밀의 숲>, 황시목': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '직업물', sub: '범죄/스릴러'},
        description: '뛰어난 기억력과 관찰력을 가졌지만, 감정 기능이 거의 상실된 춘천지방검찰청 원주지청 검사.',
        frontImage: './images/황시목f.png',
        backImage: './images/황시목b.png',
        frameImage: './frames/황시목.png'
    },

    '<군검사 도베르만>, 차우인': {
        gender: 'female',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '직업물', sub: '액션/모험'},
        description: '거침없는 언변을 가졌으며 강자에 대한 두려움이 없다. 육군 4사단 위 군검사.',
        frontImage: './images/차우인f.png',
        backImage: './images/차우인b.png',
        frameImage: './frames/차우인.png'
    },

    '<킹스맨: 시크릿 에이전트>, 해리 하트': {
        gender: 'male',
        tags: ['독립적인', '예민', '다정한'],
        genres: { main: '액션/모험', sub: '코미디'},
        description: '강력한 카리스마를 가진 범세계적 비밀조직 킹스맨의 특수요원.',
        frontImage: './images/해리f.png',
        backImage: './images/해리b.png',
        frameImage: './frames/해리.png'
    },

    '<헝거게임: 판엠의 불꽃>, 캣니스 에버딘': {
        gender: 'female',
        tags: ['관계지향적인', '무던한', '다정한'],
        genres: { main: '액션/모험', sub: '판타지'},
        description: '사하는 사람을 위해 자신의 목숨을 아끼지 않는 전사.',
        frontImage: './images/캣니스f.png',
        backImage: './images/캣니스b.png',
        frameImage: './frames/캣니스.png'
    },

    '<매드맥스: 분노의 도로>, 눅스': {
        gender: 'male',
        tags: ['관계지향적인', '예민한', '다정한'],
        genres: { main: '액션/모험', sub: '판타지'},
        description: '순박하고 단순하다. 임모탄 조를 따르는 워보이이자 운전수.',
        frontImage: './images/눅스f.png',
        backImage: './images/눅스b.png',
        frameImage: './frames/눅스.png'
    },

    '<킬 빌>, 베아트릭스 키도': {
        gender: 'female',
        tags: ['관계지향적인', '예민한', '시니컬한'],
        genres: { main: '액션/모험', sub: '범죄/스릴러'},
        description: '대단한 근성과 끈기를 가졌다. 암살단 데들리 바이퍼스의 일원이었지만 평범한 삶을 원한다.',
        frontImage: './images/베아트릭스f.png',
        backImage: './images/베아트릭스b.png',
        frameImage: './frames/베아트릭스.png'
    },

    '<데드풀>, 데드풀': {
        gender: 'male',
        tags: ['독립적인', '무던한', '시니컬한'],
        genres: { main: '액션/모험', sub: '미디'},
        description: '독보적인 똘끼를 가진 안티히어로.',
        frontImage: './images/데드풀f.png',
        backImage: './images/데드풀b.png',
        frameImage: './frames/데드풀.png'
    },

    '<마녀>, 구자윤': {
        gender: 'female',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '액션/모험', sub: '판타지'},
        description: '차갑고 냉혹하며 무자비하다. 표정과 말투에 모든 상황을 쥐고 통제할 수 있다는 여유와 자신감이 묻어나는 고등학생.',
        frontImage: './images/구자윤f.png',
        backImage: './images/구자윤b.png',
        frameImage: './frames/구자윤.png'
    },

    '<악의 마음을 읽는 자들>, 송하영': {
        gender: 'male',
        tags: ['독립적인', '예민한', '다정한'],
        genres: { main: '범죄/스릴러', sub: '직업물'},
        description: '인간에 대한 애정을 놓지 않으면도 냉정함까지 유지하는 프로파일러.',
        frontImage: './images/송하영f.png',
        backImage: './images/송하영b.png',
        frameImage: './frames/송하영.png'
    },

    '<D.P.>, 한호열': {
        gender: 'male',
        tags: ['독립적인', '예민한', '다정한'],
        genres: { main: '범죄/스릴러', sub: '액션/모험'},
        description: '자유분방하고 능글맞은 성격의 군탈체포조 조장.',
        frontImage: './images/한호열f.png',
        backImage: './images/한호열b.png',
        frameImage: './frames/한호열.png'
    },

    '<비질란테>, 김지용': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '범죄/스릴러', sub: '액션/모험'},
        description: '문무를 겸비한 초 엘리트로 많은 사람들에게 신뢰를 받다. 경찰이자 다크히어로.',
        frontImage: './images/김지용f.png',
        backImage: './images/김지용b.png',
        frameImage: './frames/김지용.png'
    },

    '<친절한 금자씨>, 이금자': {
        gender: 'female',
        tags: ['관계지향적인', '무던한', '시니컬한'],
        genres: { main: '범죄/스릴러', sub: '범죄/스릴러'},
        description: '자유분방하고 순진 소녀였지만 독기를 품게 된다.',
        frontImage: './images/이금자f.png',
        backImage: './images/이금자b.png',
        frameImage: './frames/김지용.png'   
    },

    '<위플래쉬>, 테런스 플레처': {
        gender: 'male',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '범죄/스릴러', sub: '직업물'},
        description: '뛰어난 음악적 능력을 소유하고 있지만, 동시에 상당한 매드 아티스트. 온갖 신체적 및 언어적 폭력을 서슴치 않는 셰이퍼 음악학교의 교수.',
        frontImage: './images/플레처f.png',
        backImage: './images/플레처b.png',
        frameImage: './frames/플레처.png'
    },

    '<이코록 친밀한 배신자>, 장하빈': {
        gender: 'female',
        tags: ['독립적인', '예민한', '시니컬한'],
        genres: { main: '범죄/스릴러', sub: '직업물'},
        description: '거짓말이 공부만큼 쉬운 고등학생.',
        frontImage: './images/장하빈f.png',
        backImage: './images/장하빈b.png',
        frameImage: './frames/장하빈.png'
    }




};

// 한글 자음 추출 함수 추가
function getConsonants(str) {
    const consonants = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const result = [];
    
    for (let char of str) {
        const code = char.charCodeAt(0) - 0xAC00;
        if (code > -1 && code < 11172) { // 한글인 경우
            const consonantIndex = Math.floor(code / 28 / 21);
            result.push(consonants[consonantIndex]);
        }
    }
    return result;
}

// 매칭 함수
function findBestMatch(userChoices, selectedGenres) {
    let bestMatches = [];
    let maxScore = 0;
    const userName = document.getElementById('userName').value;
    const userConsonants = getConsonants(userName);

    for (const [name, info] of Object.entries(characters)) {
        // 성별이 다르면 건너뛰기
        if (info.gender !== selectedGender) continue;
        
        let score = 0;
        
        // 성격 태그 매칭 (각각 1점)
        userChoices.forEach(choice => {
            if (info.tags.includes(choice)) {
                score += 1;
            }
        });

        // 장르 매칭 (메인 2점, 브 1점)
        selectedGenres.forEach(genre => {
            if (info.genres.main === genre) {
                score += 2;
            } else if (info.genres.sub === genre) {
                score += 1;
            }
        });

        if (score > maxScore) {
            bestMatches = [name];
            maxScore = score;
        } else if (score === maxScore) {
            bestMatches.push(name);
        }
    }

    // 동점자가 여러 명일 경우 자음 비교
    if (bestMatches.length > 1) {
        let maxConsonantMatch = -1;
        let consonantMatches = [];

        bestMatches.forEach(characterName => {
            // 캐릭터 이름에서 작품명 제외하고 실제 이름만 추출 ('<작품명>, 이름' 형식)
            const actualName = characterName.split(', ')[1];
            const characterConsonants = getConsonants(actualName);
            
            // 일치하는 자음 수 계산
            let matchCount = 0;
            userConsonants.forEach(cons => {
                if (characterConsonants.includes(cons)) {
                    matchCount++;
                }
            });

            if (matchCount > maxConsonantMatch) {
                maxConsonantMatch = matchCount;
                consonantMatches = [characterName];
            } else if (matchCount === maxConsonantMatch) {
                consonantMatches.push(characterName);
            }
        });

        // 자음 매칭이 있는 경우 해당 결과 사용, 없으면 원래 결과에서 랜덤
        bestMatches = consonantMatches.length > 0 ? consonantMatches : bestMatches;
    }

    // 최종적으로 랜덤 선택
    return bestMatches[Math.floor(Math.random() * bestMatches.length)];
}

// 추천 함수
function recommendCharacters() {
    const characterList = document.getElementById('characterList');
    characterList.innerHTML = '';
    const userName = document.getElementById('userName').value;

    // 사용자 이름 색상 적용
    const userNameSpan = document.querySelector('#result .user-name');
    userNameSpan.textContent = userName;
    userNameSpan.style.color = '#FF5C2C';

    const userChoices = [personality, sensitivity, kindness];
    const recommendedCharacter = findBestMatch(userChoices, selectedGenresList);

    // 결과 컨테이너 스타일
    const resultContainer = document.getElementById('result');
    resultContainer.style.display = 'flex';
    resultContainer.style.flexDirection = 'column';
    resultContainer.style.alignItems = 'center';
    resultContainer.style.gap = '20px';
    resultContainer.style.padding = '20px';

    // 제목에 사용자 이름 색상 적용
    const title = document.querySelector('#result h2');
    title.innerHTML = `<span style="color: #FF5C2C">${userName}</span>님과 잘 맞는 캐릭터는`;
    title.style.marginBottom = '10px';

    // 캐릭터 이름을 별도의 div로 생성
    const characterNameDiv = document.createElement('div');
    characterNameDiv.textContent = recommendedCharacter;
    characterNameDiv.style.fontSize = '24px';
    characterNameDiv.style.marginBottom = '30px';
    characterNameDiv.style.textAlign = 'center';
    resultContainer.insertBefore(characterNameDiv, characterList);

    // 3D 카드 생성 (80% 크기)
    createCharacterCard(recommendedCharacter, characterList);

    // 다시 시작 버튼
    const restartButton = document.querySelector('#result button');
    restartButton.style.marginTop = '30px';
}

// 카드 앞면 생성 함수 수정
function createCardFront(characterName, width, height) {
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.style.position = 'absolute';
    cardFront.style.width = '100%';
    cardFront.style.height = '100%';
    cardFront.style.backfaceVisibility = 'hidden';

    const img = document.createElement('img');
    // frontImage가 있으면 사용하고, 없으면 일반 image 사용
    img.src = characters[characterName].frontImage || characters[characterName].image;
    img.alt = characterName;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '10px';

    cardFront.appendChild(img);
    return cardFront;
}

// 카드 뒷면 생성 함수 수정
function createCardBack(characterName, width, height) {
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.position = 'absolute';
    cardBack.style.width = '100%';
    cardBack.style.height = '100%';
    cardBack.style.backfaceVisibility = 'hidden';
    cardBack.style.transform = 'rotateY(-180deg)';
    cardBack.style.display = 'flex';
    cardBack.style.flexDirection = 'column';
    cardBack.style.justifyContent = 'center';
    cardBack.style.padding = '20px';
    cardBack.style.boxSizing = 'border-box';
    cardBack.style.borderRadius = '10px';

    // 이미지의 가장자리 색상 져오기 위한 캔버스 사용
    const img = new Image();
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 1;
        canvas.height = 1;
        ctx.drawImage(img, 0, 0, 1, 1);
        const pixelData = ctx.getImageData(0, 0, 1, 1).data;
        cardBack.style.backgroundColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
    };
    // backImage가 있으면 사용하고, 없으면 일반 image 사용
    img.src = characters[characterName].backImage || characters[characterName].image;

    const description = document.createElement('p');
    description.textContent = characters[characterName].description;
    description.style.textAlign = 'center';
    description.style.fontSize = '16px';
    description.style.lineHeight = '1.6';
    description.style.color = '#fff';  // 텍스트는 흰색으
    description.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';  // 가독성을 위한 그림자
    cardBack.appendChild(description);

    return cardBack;
}

// 이름 입력 후 다음 단계
function submitName() {
    const userName = document.getElementById('userName').value;
    if (userName) {
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('personalitySelection').style.display = 'block';
        updateProgressIndicator(2);
    } else {
        alert('이름을 입력해주세요.');
    }
}

// 다음 단계로 이하는 함수
function nextStep(nextId) {
    const currentDiv = document.querySelector('div[style*="display: block"]');
    
    // 선택 확인
    const selectedButton = currentDiv.querySelector('.personality-button.selected');
    if (currentDiv.id.includes('Selection') && !selectedButton) {
        alert('선택을 완료해세요.');
        return;
    }

    // 현재 페이지 ID에 따라 다음 단계 결정
    let step;
    switch(currentDiv.id) {
        case 'personalitySelection':
            step = 3;
            break;
        case 'sensitivitySelection':
            step = 4;
            break;
        case 'kindnessSelection':
            step = 5;
            break;
        default:
            step = 2;
    }
    
    // 인디케이터 업데트
    updateProgressIndicator(step);

    // 선택한 값 저장
    if (selectedButton) {
        const selectedText = selectedButton.querySelector('.button-text').textContent;
        switch(currentDiv.id) {
            case 'personalitySelection':
                personality = selectedText;
                break;
            case 'sensitivitySelection':
                sensitivity = selectedText;
                break;
            case 'kindnessSelection':
                kindness = selectedText;
                break;
        }
    }
    
    // 페이지 전환
    currentDiv.style.display = 'none';
    document.getElementById(nextId).style.display = 'block';
}

// 장르 선택 관련 코드
function toggleGenre(genre, button) {
    button.classList.toggle('selected');
    
    if (button.classList.contains('selected')) {
        if (!selectedGenresList.includes(genre)) {
            selectedGenresList.push(genre);
        }
    } else {
        selectedGenresList = selectedGenresList.filter(g => g !== genre);
    }
    
    // 최소 1개 이상 선택되었을 때 다음 단계 버튼 활성화
    const nextButton = document.getElementById('nextGenreStep');
    nextButton.disabled = selectedGenresList.length === 0;
}

// 장르 선택 완료 후 결과 페이지로 이동
function selectGenres() {
    if (selectedGenresList.length > 0) {
        document.getElementById('genreSelection').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        
        // 인디케이터 숨기기
        const indicator = document.querySelector('.progress-indicator');
        if (indicator) {
            indicator.style.display = 'none';
        }
        
        // 결과 표시
        recommendCharacters();
    } else {
        alert('최소 하나의 장르를 선택해주세요.');
    }
}

// '다시 시작' 기능 추가
function restart() {
    location.reload(); // 페이 새고침
}

function createCharacterCard(characterName, container) {
    const li = document.createElement('li');
    li.style.perspective = '1000px';
    li.style.listStyle = 'none';
    li.style.display = 'flex';
    li.style.justifyContent = 'center';

    const card = document.createElement('div');
    card.className = 'character-card';
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.8s';
    card.style.cursor = 'pointer';
    card.style.position = 'relative';
    card.style.width = '300px';
    card.style.height = '400px';
    card.style.borderRadius = '24px';

    // 앞면 생성
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.style.position = 'absolute';
    cardFront.style.width = '100%';
    cardFront.style.height = '100%';
    cardFront.style.backfaceVisibility = 'hidden';
    cardFront.style.borderRadius = '24px';
    cardFront.style.overflow = 'hidden';

    const frontImg = document.createElement('img');
    frontImg.src = characters[characterName].frontImage || characters[characterName].image;
    frontImg.alt = characterName;
    frontImg.style.width = '100%';
    frontImg.style.height = '100%';
    frontImg.style.objectFit = 'cover';
    frontImg.style.borderRadius = '24px';

    // 뒷면 생성
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.position = 'absolute';
    cardBack.style.width = '100%';
    cardBack.style.height = '100%';
    cardBack.style.backfaceVisibility = 'hidden';
    cardBack.style.transform = 'rotateY(-180deg)';
    cardBack.style.display = 'flex';
    cardBack.style.flexDirection = 'column';
    cardBack.style.justifyContent = 'center';
    cardBack.style.padding = '20px';
    cardBack.style.boxSizing = 'border-box';
    cardBack.style.borderRadius = '10px';

    const backImg = document.createElement('img');
    backImg.src = characters[characterName].backImage || characters[characterName].image;
    backImg.alt = characterName;
    backImg.style.width = '100%';
    backImg.style.height = '100%';
    backImg.style.objectFit = 'cover';
    backImg.style.borderRadius = '24px';

    cardFront.appendChild(frontImg);
    cardBack.appendChild(backImg);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    let isFlipped = false;

    function startAnimations() {
        // 초기 회전 애니메이션
        card.style.transition = 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transform = 'rotateY(360deg)';
        
        // 회전이 끝나는 시점(2초)에 맞춰서 실행
        setTimeout(() => {
            card.style.transform = 'rotateY(0deg)';
            card.style.transition = 'transform 0.2s ease-in-out';
            startWaveAnimation();
            
            // 회전이 끝난 직후 바로 안내 문구 표시
            requestAnimationFrame(() => {
                showClickGuide();
            });
        }, 1000);
    }

    function startWaveAnimation() {
        let angle = 0;
        const waveInterval = setInterval(() => {
            if (isFlipped) {
                clearInterval(waveInterval);
                return;
            }
            
            angle += 0.03;
            const movement = Math.sin(angle) * 5;
            card.style.transform = `rotateY(${movement}deg)`;
        }, 30);
    }

    function showClickGuide() {
        const guideText = document.createElement('div');
        guideText.className = 'click-guide';
        guideText.innerHTML = '클릭하여 자세히 보기 <span class="arrow">👆</span>';
        guideText.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            font-size: 16px;
            font-weight: bold;
            background: rgba(0, 0, 0, 0.7);
            padding: 12px 20px;
            border-radius: 20px;
            z-index: 10;
            pointer-events: none;
            white-space: nowrap;
            opacity: 1;
        `;

        card.style.position = 'relative';
        card.appendChild(guideText);

        // 4초 후에 자동으로 사라지게 설정
        setTimeout(() => {
            guideText.style.opacity = '0';
            setTimeout(() => guideText.remove(), 300);
        }, 2000);
    }

    // 클릭 이벤트 - 카드 뒤집기 애니메이션 수정
    card.addEventListener('click', () => {
        isFlipped = !isFlipped;
        card.style.transition = 'transform 0.6s ease-in-out';  // 뒤집기 속도 조정
        card.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
        
        // 클릭 가이드 즉시 숨기기
        const guide = card.querySelector('.click-guide');
        if (guide) {
            guide.style.opacity = '0';
            setTimeout(() => guide.remove(), 300);
        }
    });

    // 마우스 호버 시 애메이션 일시 중지
    card.addEventListener('mouseenter', () => {
        if (!isFlipped) {
            card.style.transition = 'transform 0.3s ease-out';
            card.style.transform = 'rotateY(0)';
        }
    });

    // 마우스가 벗어났을 때 애니메이션 재시작
    card.addEventListener('mouseleave', () => {
        if (!isFlipped) {
            card.style.transition = 'transform 0.5s ease-in-out';
            startWaveAnimation();
        }
    });

    // 셀카 버튼 추가
    const selfieButton = document.createElement('button');
    selfieButton.textContent = '셀카 찍기 📸';
    selfieButton.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background-color: #FF5C2C;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        z-index: 20;
        transition: all 0.3s ease;
    `;

    // 셀카 기능 구현
    selfieButton.addEventListener('click', async (e) => {
        e.stopPropagation();

        try {
            if (!confirm('카메라 접근 권한이 필요합니다. 허용하시겠습니까?')) {
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                } 
            });

            const cameraContainer = document.createElement('div');
            cameraContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            `;

            // 버튼들 먼저 생성
            const buttonContainer = document.createElement('div');
            buttonContainer.style.cssText = `
                display: flex;
                gap: 10px;
                margin-top: 20px;
            `;

            const captureButton = document.createElement('button');
            captureButton.textContent = '촬영하기';
            captureButton.style.cssText = `
                padding: 10px 20px;
                background-color: #FF5C2C;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                font-weight: bold;
            `;

            const closeButton = document.createElement('button');
            closeButton.textContent = '닫기';
            closeButton.style.cssText = `
                padding: 10px 20px;
                background-color: #373739;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                font-weight: bold;
            `;

            const shareButton = document.createElement('button');
            shareButton.textContent = 'AirDrop으로 공유하기';
            shareButton.style.cssText = `
                display: none;
                padding: 10px 20px;
                background-color: #FF5C2C;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                font-weight: bold;
            `;

            // 컨텐츠 컨테이너 생성
            const contentContainer = document.createElement('div');
            contentContainer.style.cssText = `
                display: flex;
                gap: 20px;
                align-items: center;
                justify-content: center;
            `;

            // 비디오 컨테이너
            const videoContainer = document.createElement('div');
            videoContainer.style.cssText = `
                position: relative;
                width: 323.15px;
                height: 493.228px;
                border-radius: 32px;
                overflow: hidden;
            `;

            const video = document.createElement('video');
            video.style.cssText = `
                width: 100%;
                height: 100%;
                object-fit: cover;
                transform: scaleX(-1);
                border-radius: 32px;
            `;
            video.srcObject = stream;
            video.autoplay = true;

            const frameImg = document.createElement('img');
            frameImg.src = characters[characterName].frameImage;
            frameImg.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
            `;

            // 프리뷰 컨테이너
            const previewContainer = document.createElement('div');
            previewContainer.style.cssText = `
                display: none;
                width: 323.15px;
                height: 493.228px;
                border-radius: 32px;
                overflow: hidden;
            `;

            const previewImg = document.createElement('img');
            previewImg.style.cssText = `
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 32px;
            `;

            // 여기에 이벤트 리스너 추가
            captureButton.addEventListener('click', () => {
                const displayWidth = 323.15;
                const displayHeight = 493.228;
                
                const canvas = document.createElement('canvas');
                canvas.width = displayWidth * 2;
                canvas.height = displayHeight * 2;
                const ctx = canvas.getContext('2d');
                
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                
                // 비디오 비율 계산
                const videoAspect = video.videoWidth / video.videoHeight;
                const canvasAspect = displayWidth / displayHeight;
                
                let drawWidth, drawHeight, drawX, drawY;
                
                if (videoAspect > canvasAspect) {
                    // 비디오가 더 넓은 경우
                    drawHeight = displayHeight * 2;
                    drawWidth = drawHeight * videoAspect;
                    drawY = 0;
                    drawX = (displayWidth * 2 - drawWidth) / 2;
                } else {
                    // 비디오가 더 좁은 경우
                    drawWidth = displayWidth * 2;
                    drawHeight = drawWidth / videoAspect;
                    drawX = 0;
                    drawY = (displayHeight * 2 - drawHeight) / 2;
                }
                
                // 비디오 캡처
                ctx.save();
                ctx.scale(-1, 1);
                ctx.drawImage(video, -drawWidth - drawX, drawY, drawWidth, drawHeight);
                ctx.restore();
                
                // 프레임 이미지 그리기
                const img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, displayWidth * 2, displayHeight * 2);
                    
                    // 프리뷰 표시
                    previewImg.src = canvas.toDataURL('image/png', 1.0);
                    previewContainer.style.cssText = `
                        display: block;
                        width: ${displayWidth}px;
                        height: ${displayHeight}px;
                        border-radius: 32px;
                        overflow: hidden;
                    `;
                    
                    previewImg.style.cssText = `
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 32px;
                    `;

                    videoContainer.style.display = 'none';
                    captureButton.style.display = 'none';
                    shareButton.style.display = 'block';

                    // 카드 뒷면 생성
                    const cardBackContainer = document.createElement('div');
                    cardBackContainer.style.cssText = `
                        width: ${displayWidth}px;
                        height: ${displayHeight}px;
                        border-radius: 32px;
                        overflow: hidden;
                        margin-left: 20px;
                    `;

                    const cardBackImg = document.createElement('img');
                    cardBackImg.src = characters[characterName].backImage;
                    cardBackImg.style.cssText = `
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 32px;
                    `;

                    cardBackContainer.appendChild(cardBackImg);
                    contentContainer.appendChild(cardBackContainer);
                };
                img.src = characters[characterName].frameImage;
            });

            closeButton.addEventListener('click', () => {
                stream.getTracks().forEach(track => track.stop());
                cameraContainer.remove();
            });

            // 공유 기능 구현
            shareButton.addEventListener('click', async () => {
                try {
                    const response = await fetch(previewImg.src);
                    const blob = await response.blob();
                    const file = new File([blob], 'character_selfie.png', { type: 'image/png' });
                    
                    if (navigator.share) {
                        await navigator.share({
                            files: [file],
                            title: '캐릭터 셀카',
                            text: '나와 닮은 캐릭터와 함께 찍은 셀카입니다!'
                        });
                    } else {
                        alert('이 브라우저에서는 AirDrop 공유가 지원되지 않습니다.');
                    }
                } catch (error) {
                    console.error('공유 실패:', error);
                    alert('공유에 실패했습니다.');
                }
            });

            // 요소들 조립
            videoContainer.appendChild(video);
            videoContainer.appendChild(frameImg);
            previewContainer.appendChild(previewImg);
            buttonContainer.appendChild(captureButton);
            buttonContainer.appendChild(shareButton);
            buttonContainer.appendChild(closeButton);
            contentContainer.appendChild(videoContainer);
            contentContainer.appendChild(previewContainer);
            cameraContainer.appendChild(contentContainer);
            cameraContainer.appendChild(buttonContainer);
            document.body.appendChild(cameraContainer);

        } catch (err) {
            console.error('카메라 접근 오류:', err);
            if (err.name === 'NotAllowedError') {
                alert('카메라 접근이 거부되었습니다. 브라우저 설정에서 카메라 권한을 허용해주세요.');
            } else {
                alert('카메라 접근에 실패했습니다: ' + err.message);
            }
        }
    });

    card.appendChild(selfieButton);

    li.appendChild(card);
    container.appendChild(li);

    // 1초 후에 애니메이션 시작
    setTimeout(startAnimations, 1000);
}

// 이름 입력 관련
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('userName');
    const nameNextButton = document.querySelector('#nameInput button');
    
    // 초기 상태 설정
    nameNextButton.disabled = true;
    nameNextButton.classList.add('next-step-button');
    
    nameInput.addEventListener('input', () => {
        const hasValue = nameInput.value.trim().length > 0;
        nameNextButton.disabled = !hasValue;
        
        if (hasValue) {
            nameNextButton.style.backgroundColor = '#FF5C2C';
            nameNextButton.style.color = 'white';
        } else {
            nameNextButton.style.backgroundColor = '#373739';
            nameNextButton.style.color = '#8E8E93';
        }
    });
});

// 성격 선택 버튼과 다음 버튼 관련 코드
const personalityButtons = document.querySelectorAll('.personality-button');
const personalityNextButton = document.querySelector('.personality-next-button');
let personalitySelected = false;

personalityButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 기존 선택 제거
        personalityButtons.forEach(btn => btn.classList.remove('selected'));
        // 현재 버튼 선택
        button.classList.add('selected');
        // 다음 버튼 활성화
        personalityNextButton.classList.add('active');
        personalitySelected = true;
    });
});

// 성격 선택 관련 변수들
let selectedPersonality = null;
let selectedSensitivity = null;
let selectedKindness = null;

// 성격 버튼 선택 시 실행되는 함수
function toggleGradient(button) {
    // 클릭된 요소가 버튼 내부의 요소일 경우 버튼을 찾아서 설정
    if (!button.classList.contains('personality-button')) {
        button = button.closest('.personality-button');
    }
    
    // 버튼을 찾지 못했다면 종료
    if (!button) return;
    
    const gradientPath = button.querySelector('.gradient');
    const basePath = button.querySelector('.base');
    const text = button.querySelector('.button-text');
    const buttonText = text.textContent;
    
    // 현재 페이지의 모든 버튼 찾기
    const currentPage = button.closest('div[id$="Selection"]');
    const allButtons = currentPage.querySelectorAll('.personality-button');
    
    // 색상 매핑
    const colorMap = {
        '독립적인': '#5E5CE6',
        '사교적인': '#30D158',
        '예민한': '#FF453A',
        '무던한': '#BF5AF2',
        '다정한': '#FF9F0A',
        '시니컬한': '#64D2FF'
    };
    
    // 모든 버튼 초기화
    allButtons.forEach(btn => {
        const btnBasePath = btn.querySelector('.base');
        const btnText = btn.querySelector('.button-text');
        btnBasePath.style.opacity = '1';
        btnText.style.color = 'white';
        btn.classList.remove('selected');
    });
    
    // 현재 버튼이 이미 선택된 상태가 아니었다면 선택 상태로 변
    if (!button.classList.contains('selected')) {
        button.classList.add('selected');
        basePath.style.opacity = '0';
        text.style.color = colorMap[buttonText] || 'white';
    }
    
    // 다음 단계 버튼 활성화 처리
    const nextButton = currentPage.querySelector('.next-step-button') || 
                      currentPage.closest('.container').querySelector('.next-step-button');
    if (nextButton) {
        nextButton.disabled = !currentPage.querySelector('.personality-button.selected');
    }
}

// 다음 단계로 이동하는 함수 (인디케이터 추가)
function nextStep(nextId) {
    const currentDiv = document.querySelector('div[style*="display: block"]');
    
    // 현재 페이지 ID에 따라 다음 계 결정
    let nextStep;
    switch(currentDiv.id) {
        case 'personalitySelection':
            nextStep = 3;
            break;
        case 'sensitivitySelection':
            nextStep = 4;
            break;
        case 'kindnessSelection':
            nextStep = 5;
            break;
        default:
            nextStep = 2;
    }
    
    // 인디케이터 업데트
    updateProgressIndicator(nextStep);
    
    // 페이지 전환
    currentDiv.style.display = 'none';
    document.getElementById(nextId).style.display = 'block';
}

function toggleGender(gender, button) {
    // 이전 선택 해제
    document.querySelectorAll('.gender-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 새로운 선택
    button.classList.add('selected');
    selectedGender = gender;
    
    // 다음 단계 버튼 활성화 체크
    checkNameInputComplete();
}

function checkNameInputComplete() {
    const nameInput = document.getElementById('userName');
    const nextButton = document.querySelector('#nameInput .next-step-button');
    const isComplete = nameInput.value.trim().length > 0 && selectedGender !== '';
    
    nextButton.disabled = !isComplete;
    if (isComplete) {
        nextButton.style.backgroundColor = '#FF5C2C';
        nextButton.style.color = 'white';
    } else {
        nextButton.style.backgroundColor = '#373739';
        nextButton.style.color = '#8E8E93';
    }
}

// 이름 입력 이벤트 리스너 수정
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('userName');
    
    nameInput.addEventListener('input', () => {
        checkNameInputComplete();
    });
});

// 시작하기 버튼 클릭
function startApp() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
    
    // 로고 표시
    document.querySelector('.header-logo').style.display = 'block';
    
    // 인디케이터 표시 및 첫 단계 활성화
    const indicator = document.querySelector('.progress-indicator');
    indicator.style.display = 'flex';  // none에서 flex로 변경
    updateProgressIndicator(1);
}

// 인디케이터 업데이트
function updateProgressIndicator(step) {
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
        if (index < step) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 카드 클릭시 뒤집기
document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});
