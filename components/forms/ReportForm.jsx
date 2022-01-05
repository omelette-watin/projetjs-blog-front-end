import styles from "./SignForms.module.css"
import { useRouter } from 'next/router'
import { useState } from "react"
import Link from "next/link"
import newReport from "../../services/dev/newReport"


const Star = ({ marked, starId }) => {
    return (
        <span data-star-id={starId} className={styles.star} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
    );
};

const ReportForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        grade: 0,
        message: "",
        error: "",
        isLoading: false,
        bounce: false
    })

    const handleSubmit = async (e) => {

        e.preventDefault()

        setFormData({
            ...formData,
            isLoading: true,
        })

        if (!formData.grade) {
            setFormData({
                ...formData,
                error: "Veuillez choisir une note",
                isLoading: false,
                bounce: true,
            })
            return null
        }

        newReport({
            grade: formData.grade,
            message: formData.message
        })
            .then(() => {
                    router.replace("/")

            })
            .catch((e) => {
                setFormData({
                    ...formData,
                    error: e.response.data.message || e.message,
                    isLoading: false,
                    bounce: true
                })
            })

    }

    const StarRating = () => {
        const [selection, setSelection] = useState(0);

        const hoverOver = event => {
            let val = 0;
            if (event && event.target && event.target.getAttribute('data-star-id'))
                val = event.target.getAttribute('data-star-id');
            setSelection(val);
        };

        return (
            <div
                className={styles.star_wrapper}
                onMouseOut={() => hoverOver(null)}
                onClick={e => setFormData({
                    ...formData,
                    grade: e.target.getAttribute('data-star-id') || formData.grade
                }
                   )}
                onMouseOver={hoverOver}
            >
                {Array.from({ length: 5 }, (v, i) => (
                    <Star
                        starId={i + 1}
                        key={`star_${i + 1}`}
                        marked={selection ? selection >= i + 1 : formData.grade >= i + 1}
                    />
                ))}
            </div>
        );
    };


    return (
        <div className={styles.form_wrapper}>
            <div className={styles.logo_mobile}>
                <img src="/images/logo.svg" alt=""/>
                <h3>Your <strong>Opinion</strong> matters !</h3>
            </div>
            <div className={styles.logo_desktop}>
                <img src="/images/logo.svg" alt=""/>
                <h3>Your <strong>Opinion</strong> matters !</h3>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.form} p-x`}>
                <div className={styles.headings}>
                    <h2>Dev' Report</h2>
                </div>


                {formData.error
                 ?<div id={"error"} className={`${formData.bounce ? "bounce" : null } ${styles.error}`}>{formData.error}</div>
                 :<p className={styles.rating}>À combien noteriez-vous ce site ?</p>
                }



                <StarRating value={formData.grade} />

                <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    id={"message"}
                    required={false}
                    placeholder={"Laisser un commentaire"}
                    cols={"10"}
                    rows={"5"}


                >

                </textarea>


                <div className={styles.links}>
                    <button disabled={formData.isLoading} type="submit" className={`${styles.login_btn} btn`}>
                        {formData.isLoading ? "Envoi ..." : "Envoyer"}
                    </button>

                </div>
                <div className={styles.home}>
                    <Link href={"/"}>
                        <a>Revenir sur le site</a>
                    </Link>
                </div>
            </form>
            <div className={`${styles.circle} ${styles.large}`}>
            </div>
            <div className={`${styles.circle} ${styles.small}`}>
            </div>
        </div>
    )
}

export default ReportForm