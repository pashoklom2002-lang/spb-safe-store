import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BitrixLeadRequest {
  name: string;
  phone: string;
  containerType: string;
  rentalPeriod: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, containerType, rentalPeriod }: BitrixLeadRequest = await req.json();

    console.log('Sending lead to Bitrix24:', { name, phone, containerType, rentalPeriod });

    // Отправка лида в Bitrix24
    const bitrixUrl = 'https://b24-zl6hgh.bitrix24.ru/rest/1/amx94t6up20htd2i/crm.lead.add';
    
    const bitrixData = {
      fields: {
        TITLE: `Заявка на аренду контейнера ${containerType}`,
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        COMMENTS: `Тип контейнера: ${containerType}\nСрок аренды: ${rentalPeriod}`,
        SOURCE_ID: "WEB",
        UF_CRM_1: containerType, // Пользовательское поле для типа контейнера
        UF_CRM_2: rentalPeriod,  // Пользовательское поле для срока аренды
      }
    };

    const response = await fetch(bitrixUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bitrixData),
    });

    const result = await response.json();
    
    console.log('Bitrix24 response:', result);

    if (result.error) {
      console.error('Bitrix24 error:', result.error_description);
      throw new Error(result.error_description || 'Bitrix24 API error');
    }

    return new Response(
      JSON.stringify({ success: true, leadId: result.result }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in send-to-bitrix function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
