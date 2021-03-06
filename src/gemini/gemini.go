package gemini

const (
	GEMINI_BASE_URL    = "https://api.gemini.com"
	GEMINI_SANDBOX_URL = "https://api.sandbox.gemini.com"
)

type Api struct {
	key    string
	secret string
	url    string
}

func New(isLive bool, key, secret string) Api {
	var url string
	if isLive {
		url = GEMINI_BASE_URL
	} else {
		url = GEMINI_SANDBOX_URL
	}

	return Api{
		key:    key,
		secret: secret,
		url:    url,
	}
}

type OrderRequest struct {
	Request       string   `json:"request"`
	Nonce         int64    `json:"nonce"`
	ClientOrderID string   `json:"client_order_id"`
	Symbol        string   `json:"symbol"` // validate this
	Amount        float64  `json:"amount"`
	Price         float64  `json:"price"`
	Side          string   `json:"side"`    // validate this -- 1) "buy" or 2) "sell"
	Type          string   `json:"type"`    // validate this -- can either be 1) "exchange limit" 2) "exchange stop limit"
	Options       []string `json:"options"` // consider using "maker-or-cancel"	for immediate cancellation for a maker order that's not filled
	// stop price
	// account
}

type OrderResponse struct {
	OrderId           string  `json:"order_id"` // might need to make custom `ID` type + unmarshaller
	Id                int     `json:"id"`
	Symbol            string  `json:"symbol"`
	Exchange          string  `json:"exchange"` // maybe remove this if we don't need it
	AvgExecutionPrice float64 `json:"avg_execution_price,string"`
	Side              string  `json:"side"`
	Type              string  `json:"type"`
	Timestampms       int64   `json:"timestampms"`
	IsLive            bool    `json:"is_live"`
	IsCancelled       bool    `json:"is_cancelled"`
	IsHidden          bool    `json:"is_hidden"`
	WasForced         bool    `json:"was_forced"`
	ExecutedAmount    float64 `json:"executed_amount,string"`
	RemainingAmount   float64 `json:"remaining_amount,string"`
	ClientOrderId     string  `json:"client_order_id"`
	// Options           []string  `json:"options"`
	Price          float64 `json:"price,string"`
	OriginalAmount float64 `json:"original_amount,string"`
}
