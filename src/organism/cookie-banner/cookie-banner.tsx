import { MouseEvent, useEffect, useState } from 'react'
import { Modal } from '../../molecule'
import { Button, Flex, Link, Text } from '../../atom'

const COOKIE_NAME = 'cookie_policy_request'

type TCookieConsent = 'true' | 'false' | undefined | 'check'

export const CookieBanner = ({ posthogKey }: { posthogKey: string }) => {
  const [consent, setConsent] = useState<TCookieConsent>('check')

  useEffect(() => {
    const value = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${COOKIE_NAME}=`))
      ?.split('=')[1]

    if (value === 'true' || value === 'false') {
      setConsent(value)
    } else {
      setConsent(undefined)
    }
  }, [])

  const handleCookieAction = (e: MouseEvent<HTMLButtonElement>) => {
    const { consent } = (e.target as HTMLButtonElement).dataset as {
      consent: TCookieConsent
    }

    const maxAge = 60 * 60 * 24 * 365 // 1 year
    document.cookie = `${COOKIE_NAME}=${consent}; path=/; max-age=${maxAge}; SameSite=Lax`
    setConsent(consent)
  }

  // Inject PostHog script only if consent is "true"
  useEffect(() => {
    if (
      consent === 'true' &&
      !((window as any).posthog && (window as any).posthog.__loaded)
    ) {
      // Check if the script is already present

      const posthogScript = document.createElement('script')

      posthogScript.innerHTML = `
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init Ie Ts Ms Ee Es Rs capture Ge calculateEventProperties Os register register_once register_for_session unregister unregister_for_session js getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Ds Fs createPersonProfile Ls Ps opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Cs debug I As getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('${posthogKey}', {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
})
      `
      document.body.appendChild(posthogScript)
    }
  }, [consent])

  if (consent) {
    return null
  }

  return (
    <Modal closeModal={() => {}} show={true} theme="light">
      <Flex>
        <Text>We use cookies to improve your experience.</Text>

        <Link mobile={{ textDecoration: 'underline' }} href="/legal/privacy">
          Read our privacy policy
        </Link>

        <Flex mobile={{ flexDirection: 'row' }}>
          <Button
            theme="success"
            type="button"
            onClick={handleCookieAction}
            data-consent="true"
          >
            Accept
          </Button>

          <Button
            theme="error"
            type="button"
            data-consent="false"
            onClick={handleCookieAction}
          >
            Reject
          </Button>
        </Flex>
      </Flex>
    </Modal>
  )
}
