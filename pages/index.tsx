import { useState } from 'react';
import { Button, Input, Label, Card, CardContent, CardHeader, CardTitle } from "../components/ui";
import { Video, Gift } from 'lucide-react';

export default function GifConverter() {
  const [gifUrl, setGifUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const videoFile = e.target.files[0];

      setLoading(true);

      const formData = new FormData();
      formData.append('video', videoFile);

      const response = await fetch('/api/convert-to-gif', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setGifUrl(data.gifUrl);

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">GIFMaker Pro</h1>
        <p className="text-gray-600 mt-4">Turn your videos into stunning GIFs effortlessly</p>
      </header>

      <main className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Convert Video to GIF</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="video" className="block mb-2 text-gray-600">Choose File</Label>
            <Input id="video" type="file" accept="video/*" onChange={handleFileChange} />
          </CardContent>
        </Card>

        {loading ? (
          <p className="text-blue-500 mt-4">Converting...</p>
        ) : gifUrl ? (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Your GIF:</h2>
            <img src={gifUrl} alt="Converted GIF" className="rounded-md shadow-md mt-2" />
          </div>
        ) : null}
      </main>
    </div>
  );
}
