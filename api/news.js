
export default async function handler(request, response) {
    const { country } = request.query;
    const apiKey = process.env.VITE_GNEWS_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: 'API key not configured' });
    }

    const category = "general";
    const language = "en";
    const countryCode = country || "us";

    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${countryCode}&max=10&apikey=${apiKey}`;

    try {
        const apiResponse = await fetch(url);
        const data = await apiResponse.json();

        if (!apiResponse.ok) {
            return response.status(apiResponse.status).json({ error: data.message || 'Failed to fetch from GNews' });
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}
